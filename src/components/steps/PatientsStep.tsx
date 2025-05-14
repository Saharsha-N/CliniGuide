
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useFlow } from "@/context/FlowContext";
import { useToast } from "@/components/ui/use-toast";

interface PatientsStepProps {
  onNext: () => void;
}

const PatientsStep = ({ onNext }: PatientsStepProps) => {
  const { setPatients } = useFlow();
  const [patientInput, setPatientInput] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!patientInput.trim()) {
      toast({
        title: "Input required",
        description: "Please enter at least one patient name",
        variant: "destructive",
      });
      return;
    }
    
    // Split the input by commas and trim whitespace
    const patientList = patientInput
      .split(",")
      .map(name => name.trim())
      .filter(name => name.length > 0);
    
    if (patientList.length === 0) {
      toast({
        title: "Invalid input",
        description: "Please enter at least one patient name",
        variant: "destructive",
      });
      return;
    }
    
    setPatients(patientList);
    onNext();
  };
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 px-6">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-counselor-700">
            Who are your patients?
          </CardTitle>
          <CardDescription className="text-center">
            Enter your patients' names (or initials) separated by commas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="patients">Patient Names/Initials</Label>
              <Textarea
                id="patients"
                placeholder="John Doe, Jane Smith, A.B., C.D."
                value={patientInput}
                onChange={(e) => setPatientInput(e.target.value)}
                className="min-h-[150px]"
              />
              <p className="text-sm text-gray-500">
                This information will only be used to help organize your consultation requests.
              </p>
            </div>
            <Button 
              onClick={handleSubmit} 
              className="w-full bg-counselor-600 hover:bg-counselor-700 flex items-center justify-center gap-2"
            >
              Continue
              <ArrowRight size={16} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientsStep;
