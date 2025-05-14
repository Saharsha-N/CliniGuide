
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToConsult = () => {
    const consultElement = document.getElementById("consult-section");
    if (consultElement) {
      consultElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-counselor-700 to-wellness-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Guidance for Mental Health Counselors
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Helping you navigate challenging patient scenarios with AI-powered
            insights and recommendations.
          </p>
          <Button
            onClick={scrollToConsult}
            className="bg-white text-counselor-800 hover:bg-gray-100 flex justify-center items-center gap-2 mx-auto"
            size="lg"
          >
            Get Started
            <ArrowDown size={16} />
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto"
        >
          <path
            fill="#fff"
            d="M0,64L60,69.3C120,75,240,85,360,90.7C480,96,600,96,720,85.3C840,75,960,53,1080,42.7C1200,32,1320,32,1380,32L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
