
import React, { useState } from "react";
import { FlowProvider } from "@/context/FlowContext";
import LandingStep from "@/components/steps/LandingStep";
import PatientsStep from "@/components/steps/PatientsStep";
import PatientSelectionStep from "@/components/steps/PatientSelectionStep";
import ConcernStep from "@/components/steps/ConcernStep";
import GuidanceStep from "@/components/steps/GuidanceStep";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const goToNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };
  
  const restartFlow = () => {
    setCurrentStep(0);
  };
  
  return (
    <FlowProvider>
      <div className="min-h-screen">
        {currentStep === 0 && <LandingStep onNext={goToNextStep} />}
        {currentStep === 1 && <PatientsStep onNext={goToNextStep} />}
        {currentStep === 2 && <PatientSelectionStep onNext={goToNextStep} />}
        {currentStep === 3 && <ConcernStep onNext={goToNextStep} />}
        {currentStep === 4 && <GuidanceStep onRestart={restartFlow} />}
      </div>
    </FlowProvider>
  );
};

export default Index;
