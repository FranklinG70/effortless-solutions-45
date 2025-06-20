
import { Clock, Target, Users, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: "Save Time, Gain Efficiency",
      description: "Let AI handle the repetitive work."
    },
    {
      icon: Target,
      title: "Results-Driven Approach", 
      description: "Focused on measurable growth across all channels."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our specialists combine AI expertise with proven marketing strategies to deliver exceptional results."
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Whether you're a startup or enterprise, our solutions grow with your business needs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Effortless Solutions?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge AI technology with proven marketing strategies to deliver exceptional results for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
