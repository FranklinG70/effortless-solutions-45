
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ES</span>
              </div>
              <span className="text-xl font-bold text-white">Effortless Solutions</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI-powered voice receptionists and strategic social media management to grow your business and build lasting customer relationships.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Voice AI Receptionists</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Social Media Management</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Lead Generation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Custom AI Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <p>1 833 293 3411</p>
              <p>info@goeffortlesssolutions.com</p>
              <p>1207 Delaware Ave Unit 345 Wilmington DE 19806</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 Effortless Solutions LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
