
import { Volume2, Settings, Clock, TrendingUp, Users, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Volume2,
      title: "Natural-Sounding Voice Tech",
      description: "Our AI receptionists sound completely human and natural."
    },
    {
      icon: Users,
      title: "Social Media Expertise",
      description: "Strategic content that builds communities and drives engagement."
    },
    {
      icon: Settings,
      title: "Fully Customizable Solutions",
      description: "Tailored AI and social strategies for your unique business needs."
    },
    {
      icon: Clock,
      title: "Save Time, Gain Efficiency",
      description: "Automated systems handle calls and social media 24/7."
    },
    {
      icon: TrendingUp,
      title: "Results-Driven Approach",
      description: "Focused on measurable growth and ROI across all channels."
    },
    {
      icon: Zap,
      title: "Brand Loyalty Building",
      description: "Create lasting relationships through consistent engagement."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver AI solutions and social media strategies that actually work for your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300">
                <feature.icon className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
