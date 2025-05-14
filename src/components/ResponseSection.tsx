
import { useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResponseSectionProps {
  response: string | null;
  isVisible: boolean;
}

const ResponseSection = ({ response, isVisible }: ResponseSectionProps) => {
  const responseRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isVisible && responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }
  
  return (
    <section ref={responseRef} className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <Lightbulb size={32} className="text-wellness-600 mb-3" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Your Guidance
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Based on your scenario, here are some recommendations to consider.
          </p>
        </div>

        <Card className={cn("response-container", "border-wellness-200 shadow-md")}>
          <CardHeader>
            <CardTitle>Therapeutic Recommendations</CardTitle>
            <CardDescription>
              Consider these approaches with your patient
            </CardDescription>
          </CardHeader>
          <CardContent>
            {response ? (
              <div className="prose prose-counselor max-w-none">
                {response.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">
                Still thinking about the best approach for this scenario...
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ResponseSection;
