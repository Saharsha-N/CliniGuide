
import { Brain, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Brain className="h-6 w-6 text-counselor-600" />
            <span className="ml-2 text-lg font-serif font-medium text-gray-700">
              MindGuide
            </span>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-500">
            <NavLink
              to="/"
              className="hover:text-counselor-600 transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/resources"
              className="hover:text-counselor-600 transition-colors"
            >
              Resources
            </NavLink>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} MindGuide. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-wellness-500" />
            <span>for mental health professionals</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
