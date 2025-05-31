
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
