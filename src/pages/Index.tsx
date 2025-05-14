
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ConsultForm from "../components/ConsultForm";
import ResponseSection from "../components/ResponseSection";
import { useToast } from "@/components/ui/use-toast";

const generateMockResponse = async (scenario: string): Promise<string> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  // For the POC, we're returning a mock response
  // In a real implementation, this would call an LLM API
  const responses = [
    `Based on the scenario you've described, your patient appears to be experiencing significant anxiety and depression symptoms following a major life change. Here are some therapeutic approaches to consider:

1. Validate their feelings and normalize their experience. Job loss can be traumatic and their reaction is understandable.

2. Assess for suicide risk given the mention of hopelessness. Use direct questions about thoughts of self-harm or suicide.

3. Consider using Cognitive Behavioral Therapy (CBT) techniques to help identify and challenge negative thought patterns about their self-worth being tied to employment.

4. Implement sleep hygiene practices to address the insomnia, which can exacerbate both anxiety and depression.

5. Explore practical steps for job seeking while acknowledging the emotional toll of rejection during this process.

6. If appropriate, consider referral for medication evaluation if symptoms are severe or affecting daily functioning significantly.`,
    
    `For a patient experiencing symptoms following trauma, I recommend a multi-faceted approach:

1. Create safety and stabilization first. Ensure the patient feels secure in their environment before addressing the trauma directly.

2. Consider EMDR (Eye Movement Desensitization and Reprocessing) as it has strong evidence for trauma treatment.

3. Teach grounding techniques for when they experience flashbacks or dissociation. The 5-4-3-2-1 sensory awareness exercise can be particularly helpful.

4. Use a trauma-informed lens in your approach, recognizing how past experiences may be affecting current responses.

5. Explore somatic experiencing techniques to help process trauma stored in the body.

6. Be careful not to push for trauma narrative too quickly - pace the treatment according to their tolerance and readiness.`,
    
    `For a client showing signs of substance use disorder, I recommend:

1. Use motivational interviewing techniques to explore ambivalence about changing substance use patterns.

2. Assess for medical detox needs if physical dependence is present.

3. Consider a harm reduction approach if the client isn't ready for abstinence.

4. Explore underlying factors contributing to substance use - many clients are self-medicating other conditions.

5. Build a recovery support network, potentially including 12-step or alternative support groups.

6. Address co-occurring mental health conditions that may be present.

7. Develop specific coping skills for triggers and cravings.

8. Create a relapse prevention plan that acknowledges relapse as part of the recovery process, not a failure.`,
  ];
  
  // Select a response loosely based on the input content
  let responseIndex = 0;
  if (scenario.toLowerCase().includes("trauma") || scenario.toLowerCase().includes("ptsd")) {
    responseIndex = 1;
  } else if (scenario.toLowerCase().includes("substance") || scenario.toLowerCase().includes("addiction")) {
    responseIndex = 2;
  }
  
  return responses[responseIndex];
};

const Index = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (scenario: string) => {
    try {
      setIsLoading(true);
      setShowResponse(false);
      
      const result = await generateMockResponse(scenario);
      
      setResponse(result);
      setShowResponse(true);
    } catch (error) {
      console.error("Error generating response:", error);
      toast({
        title: "Something went wrong",
        description: "Unable to generate guidance. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How MindGuide Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              MindGuide leverages advanced AI technology to analyze your patient scenarios 
              and provide evidence-based guidance tailored to your specific situation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-counselor-50 rounded-lg">
              <div className="w-12 h-12 bg-counselor-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-counselor-700 font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Describe</h3>
              <p className="text-gray-600">
                Share details about your patient's situation and the challenges you're facing.
              </p>
            </div>
            
            <div className="p-6 bg-counselor-50 rounded-lg">
              <div className="w-12 h-12 bg-counselor-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-counselor-700 font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analyze</h3>
              <p className="text-gray-600">
                Our AI system analyzes the scenario using mental health counseling knowledge.
              </p>
            </div>
            
            <div className="p-6 bg-counselor-50 rounded-lg">
              <div className="w-12 h-12 bg-counselor-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-counselor-700 font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Recommend</h3>
              <p className="text-gray-600">
                Receive personalized suggestions for therapeutic approaches and interventions.
              </p>
            </div>
          </div>
        </div>
        <ConsultForm onSubmit={handleSubmit} isLoading={isLoading} />
        <ResponseSection response={response} isVisible={showResponse} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
