
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFlow } from "@/context/FlowContext";
import { useToast } from "@/components/ui/use-toast";

interface PatientSelectionStepProps {
  onNext: () => void;
}

const PatientSelectionStep = ({ onNext }: PatientSelectionStepProps) => {
  const { patients, selectedPatient, setSelectedPatient } = useFlow();
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!selectedPatient) {
      toast({
        title: "Selection required",
        description: "Please select a patient before continuing",
        variant: "destructive",
      });
      return;
    }
    
    onNext();
  };
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 px-6">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-counselor-700">
            Which patient do you have concerns about?
          </CardTitle>
          <CardDescription className="text-center">
            Select a patient from your list to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <Select value={selectedPatient || ""} onValueChange={setSelectedPatient}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a patient" />
              </SelectTrigger>
              <SelectContent>
                {patients.map((patient, index) => (
                  <SelectItem key={index} value={patient}>
                    {patient}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
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

export default PatientSelectionStep;
