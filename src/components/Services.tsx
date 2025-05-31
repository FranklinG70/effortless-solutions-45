
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Bot, Zap, Settings, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: "Voice AI Receptionists",
      description: "Always on, never miss a call. Our custom-built voice assistants handle inbound calls, schedule appointments, qualify leads, and answer FAQs with natural, human-like responses—24/7.",
      features: ["24/7 Availability", "Natural Conversations", "Appointment Scheduling", "Lead Qualification"]
    },
    {
      icon: Bot,
      title: "AI-Powered Lead Generation",
      description: "We design AI-driven funnels that capture, qualify, and convert leads on autopilot. From chatbots to call-based lead systems, our solutions work around the clock to grow your pipeline.",
      features: ["Automated Funnels", "Lead Qualification", "Multi-Channel Capture", "CRM Integration"]
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites that convert visitors into customers. We build fast, SEO-optimized sites with integrated AI features, booking systems, and conversion-focused designs that grow your business.",
      features: ["Responsive Design", "SEO Optimization", "AI Integration", "Conversion Focus"]
    },
    {
      icon: Settings,
      title: "Custom AI Solutions",
      description: "Have a unique use case? We build tailored AI tools that fit your workflow—from voice interfaces to automation integrations with your CRM, booking system, or marketing stack.",
      features: ["Custom Development", "Workflow Integration", "API Connections", "Scalable Solutions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your customer interactions and accelerate business growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
