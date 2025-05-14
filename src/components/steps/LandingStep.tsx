
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface LandingStepProps {
  onNext: () => void;
}

const LandingStep = ({ onNext }: LandingStepProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-counselor-700 to-wellness-700 text-white px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          MindGuide
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          AI-powered guidance for mental health counselors to navigate
          challenging patient scenarios.
        </p>
        <p className="text-lg mb-12 opacity-80">
          Get evidence-based recommendations tailored to your specific patient needs.
        </p>
        <Button 
          onClick={onNext} 
          size="lg" 
          className="bg-white text-counselor-800 hover:bg-gray-100 flex items-center gap-2"
        >
          Get Started
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default LandingStep;
