
import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Loader2 } from "lucide-react";
import { useFlow } from "@/context/FlowContext";
import { useToast } from "@/components/ui/use-toast";
import { getGuidance } from "@/services/geminiService";

interface ConcernStepProps {
  onNext: () => void;
}

const ConcernStep = ({ onNext }: ConcernStepProps) => {
  const { 
    selectedPatient, 
    patientContext, 
    setPatientContext,
    clinicianConcern,
    setClinicianConcern,
    setGuidance,
    isLoading,
    setIsLoading
  } = useFlow();
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!patientContext.trim()) {
      toast({
        title: "Input required",
        description: "Please provide context about the patient",
        variant: "destructive",
      });
      return;
    }
    
    if (!clinicianConcern.trim()) {
      toast({
        title: "Input required",
        description: "Please describe your concerns or questions",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsLoading(true);
      const result = await getGuidance(patientContext, clinicianConcern);
      setGuidance(result);
      onNext();
    } catch (error) {
      console.error("Error getting guidance:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate guidance. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-10 px-6">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-counselor-700">
            Tell us about {selectedPatient}
          </CardTitle>
          <CardDescription className="text-center">
            Provide context about the patient and describe your concerns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="patientContext">Patient Context</Label>
              <Textarea
                id="patientContext"
                placeholder="Provide relevant background information about this patient (e.g., age, history, symptoms, current situation)"
                value={patientContext}
                onChange={(e) => setPatientContext(e.target.value)}
                className="min-h-[120px]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="clinicianConcern">Your Concerns/Questions</Label>
              <Textarea
                id="clinicianConcern"
                placeholder="What specific concerns do you have? What guidance are you seeking? What approaches have you tried?"
                value={clinicianConcern}
                onChange={(e) => setClinicianConcern(e.target.value)}
                className="min-h-[120px]"
              />
            </div>
            
            <Button 
              onClick={handleSubmit} 
              className="w-full bg-counselor-600 hover:bg-counselor-700 flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Guidance...
                </>
              ) : (
                <>
                  Get Guidance
                  <ArrowRight size={16} />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConcernStep;
