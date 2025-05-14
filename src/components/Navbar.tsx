
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-counselor-600" />
              <span className="ml-2 text-xl font-serif font-bold text-counselor-700">
                MindGuide
              </span>
            </NavLink>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-md text-sm font-medium",
                    isActive
                      ? "text-counselor-700 bg-counselor-100"
                      : "text-gray-600 hover:bg-counselor-50 hover:text-counselor-600"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-gray-500"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    isActive
                      ? "text-counselor-700 bg-counselor-100"
                      : "text-gray-600 hover:bg-counselor-50 hover:text-counselor-600"
                  )
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
