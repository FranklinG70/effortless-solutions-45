import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Talk About How AI Can Help Grow Your Business</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your customer experience? Get in touch for a free consultation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Call Us</h3>
                    <p className="text-gray-400">Available 24/7 for immediate assistance</p>
                  </div>
                </div>
                <a href="tel:18332933411" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
                  1 833 293 3411
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Email Us</h3>
                    <p className="text-gray-400">We'll respond within 24 hours</p>
                  </div>
                </div>
                <a href="mailto:info@goeffortlesssolutions.com" className="text-xl text-blue-400 hover:text-blue-300 transition-colors">
                  info@goeffortlesssolutions.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Location</h3>
                    <p className="text-gray-400">Based in Delaware U.S., working with clients globally</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8">
            <div className="text-center mb-8">
              <Calendar className="h-16 w-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Schedule Your Free Consultation</h3>
              <p className="text-blue-100 mb-8">
                Let's discuss your specific needs and show you how AI can transform your business operations.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <h4 className="font-bold text-white mb-2">What You'll Get:</h4>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Custom AI solution assessment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Implementation timeline
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    No-obligation proposal
                  </li>
                </ul>
              </div>
              
              <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100 text-lg py-4" asChild>
                <a href="https://link.goeffortlesssolutions.com/widget/booking/Cy4Pl7tq1QOAWlkzpDHt" target="_blank" rel="noopener noreferrer">
                  Schedule Free Consultation
                  <Calendar className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
