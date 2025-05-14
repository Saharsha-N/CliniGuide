
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Bookmark, ExternalLink, Book } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Evidence-Based Practices",
      icon: <FileText className="h-6 w-6 text-counselor-600" />,
      resources: [
        {
          title: "Cognitive Behavioral Therapy Resources",
          description: "Detailed guides and worksheets for implementing CBT techniques.",
          url: "https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral"
        },
        {
          title: "Trauma-Informed Care",
          description: "Best practices for trauma-informed mental health counseling.",
          url: "https://www.samhsa.gov/trauma-violence"
        },
        {
          title: "Motivational Interviewing Techniques",
          description: "Strategies for effective motivational interviewing with resistant clients.",
          url: "https://www.integration.samhsa.gov/clinical-practice/motivational-interviewing"
        }
      ]
    },
    {
      title: "Crisis Intervention",
      icon: <Bookmark className="h-6 w-6 text-wellness-600" />,
      resources: [
        {
          title: "Suicide Risk Assessment",
          description: "Comprehensive guide for assessing suicide risk and intervention protocols.",
          url: "https://suicidepreventionlifeline.org/professional-resources/"
        },
        {
          title: "De-escalation Techniques",
          description: "Methods for de-escalating crisis situations safely.",
          url: "https://www.crisisprevention.com/Blog/De-escalation-Tips"
        },
        {
          title: "Safety Planning Intervention",
          description: "Templates and guidelines for creating effective safety plans.",
          url: "https://suicidepreventionlifeline.org/wp-content/uploads/2016/08/Brown_StanleySafetyPlanTemplate.pdf"
        }
      ]
    },
    {
      title: "Professional Development",
      icon: <Book className="h-6 w-6 text-counselor-600" />,
      resources: [
        {
          title: "Continuing Education Opportunities",
          description: "Recommended courses and certifications for mental health counselors.",
          url: "https://www.counseling.org/continuing-education/overview"
        },
        {
          title: "Ethical Guidelines",
          description: "Current ethical standards and guidelines for mental health practice.",
          url: "https://www.counseling.org/knowledge-center/ethics"
        },
        {
          title: "Supervision Best Practices",
          description: "Resources for both receiving and providing clinical supervision.",
          url: "https://www.apa.org/education-career/ce/supervision-resources"
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-counselor-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Counseling Resources
            </h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-center text-counselor-100">
              A collection of valuable resources to support your practice as a mental health counselor.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-lg text-gray-600 mb-8">
            We've curated these resources to help you enhance your counseling practice. 
            Please note that these are educational references and should be used in conjunction 
            with your professional judgment and training.
          </p>
          
          {resourceCategories.map((category, index) => (
            <div key={index} className="mb-12">
              <div className="flex items-center mb-6">
                {category.icon}
                <h2 className="text-2xl font-bold ml-3">{category.title}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <Card key={resourceIndex} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-counselor-600 hover:text-counselor-800 flex items-center"
                      >
                        View Resource
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
          
          <div className="mt-12 p-6 bg-counselor-50 rounded-lg border border-counselor-100">
            <h3 className="text-xl font-semibold mb-3">Disclaimer</h3>
            <p className="text-gray-700">
              The resources provided here are for educational purposes only. MindGuide does not endorse 
              specific treatments or approaches. Always use your professional judgment and follow 
              applicable laws, regulations, and ethics codes governing your practice.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
