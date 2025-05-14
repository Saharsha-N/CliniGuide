
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { BrainCircuit, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ConsultFormProps {
  onSubmit: (scenario: string) => Promise<void>;
  isLoading: boolean;
}

const ConsultForm = ({ onSubmit, isLoading }: ConsultFormProps) => {
  const [scenario, setScenario] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!scenario.trim()) {
      toast({
        title: "Input required",
        description: "Please describe the patient scenario",
        variant: "destructive",
      });
      return;
    }
    
    if (scenario.length < 20) {
      toast({
        title: "More information needed",
        description: "Please provide more details about the patient scenario (at least 20 characters)",
        variant: "destructive",
      });
      return;
    }
    
    await onSubmit(scenario);
  };

  return (
    <section id="consult-section" className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <BrainCircuit size={32} className="text-counselor-600 mb-3" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Get Personalized Guidance
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Describe your patient scenario below and receive AI-powered suggestions on how to approach the situation.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Consultation Request</CardTitle>
            <CardDescription>
              The more details you provide, the more tailored our guidance will be.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="scenario">Describe your patient scenario</Label>
                  <Textarea
                    id="scenario"
                    placeholder="E.g., I have a patient who is struggling with depression and anxiety after a recent job loss. They're having trouble sleeping and have mentioned feeling hopeless..."
                    value={scenario}
                    onChange={(e) => setScenario(e.target.value)}
                    className="min-h-[150px]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-counselor-600 hover:bg-counselor-700 w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating Guidance...
                    </>
                  ) : (
                    "Get Guidance"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ConsultForm;
