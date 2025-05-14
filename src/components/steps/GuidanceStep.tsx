
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { useFlow } from "@/context/FlowContext";

interface GuidanceStepProps {
  onRestart: () => void;
}

const GuidanceStep = ({ onRestart }: GuidanceStepProps) => {
  const { selectedPatient, guidance } = useFlow();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-10 px-6">
      <Card className="w-full max-w-3xl">
        <CardHeader className="space-y-2">
          <div className="flex justify-center mb-2">
            <Lightbulb size={32} className="text-wellness-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-center text-counselor-700">
            Guidance for {selectedPatient}
          </CardTitle>
          <CardDescription className="text-center">
            Based on the information provided, here are recommendations to consider
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="prose prose-counselor max-w-none bg-white p-6 rounded-lg border border-gray-200">
              {guidance ? (
                guidance.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))
              ) : (
                <p className="text-gray-500 italic">No guidance generated. Please try again.</p>
              )}
            </div>
            
            <div className="flex justify-center">
              <Button 
                onClick={onRestart} 
                variant="outline" 
                className="flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                Start New Consultation
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GuidanceStep;
