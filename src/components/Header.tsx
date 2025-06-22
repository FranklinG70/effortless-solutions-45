
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isContentExamplesPage = location.pathname === '/content-examples';

  const handleNavClick = (sectionId: string) => {
    if (isContentExamplesPage) {
      // Navigate to home page and then scroll to section
      navigate('/', { replace: true });
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Scroll to section on current page
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ES</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Effortless Solutions</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('services')} 
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Contact
            </button>
            <Link to="/content-examples" className="text-gray-600 hover:text-blue-600 transition-colors">
              Content Examples
            </Link>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
              <a href="https://link.goeffortlesssolutions.com/widget/booking/Cy4Pl7tq1QOAWlkzpDHt" target="_blank" rel="noopener noreferrer">
                Free Consultation
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
