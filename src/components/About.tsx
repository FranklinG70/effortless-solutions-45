
import { Target, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Effortless Solutions LLC</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're an AI marketing agency dedicated to helping businesses automate and scale customer interactions. From smart voice receptionists to high-converting lead generation systems, we build intelligent solutions that save time, drive results, and let you focus on what you do best.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Mission-Driven</h3>
                <p className="text-sm text-gray-600">Focused on your success</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Client-Centric</h3>
                <p className="text-sm text-gray-600">Your needs come first</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">Cutting-edge solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
