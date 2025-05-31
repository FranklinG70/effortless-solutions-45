
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Bot, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AI-Powered Voice Receptionists & Lead Generation{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  That Work While You Sleep
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Elevate your customer experience and supercharge your sales funnel with intelligent voice AI and automated lead-gen solutions tailored for growth.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 1 833 293 3411
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">24/7 Available</div>
                  <div className="text-sm text-gray-600">Never miss a call</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Results-Driven</div>
                  <div className="text-sm text-gray-600">Focus on conversion</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">AI Assistant Active</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm text-blue-600 font-medium">Incoming Call</div>
                  <div className="text-gray-900">Hello! Thank you for calling. How can I help you today?</div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 font-medium">Customer</div>
                  <div className="text-gray-900">I'd like to schedule an appointment.</div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm text-blue-600 font-medium">AI Assistant</div>
                  <div className="text-gray-900">Perfect! I have several time slots available. What works best for you?</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-sm text-gray-600">Call Duration: 2:34</span>
                <span className="text-sm text-green-600 font-medium">Lead Qualified ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
