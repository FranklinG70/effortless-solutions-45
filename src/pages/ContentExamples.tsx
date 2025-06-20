import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ContentExamples = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const socialMediaPosts = [
    {
      type: "Fun Fact & History",
      title: "Ancient Plumbing Origins",
      content: "Did you know plumbing has ancient roots? The earliest forms of plumbing date back to 2700 BC in ancient civilizations like Egypt and Mesopotamia, where they used earthen pipes for water management.",
      hashtags: "#PlumbingHistory #AncientPlumbing #FranksPlumbing",
      image: "/lovable-uploads/251e0607-00f0-431d-80bb-9815a8feb07e.png"
    },
    {
      type: "Fun Fact & History", 
      title: "First Indoor Plumbing Hotel",
      content: "The Tremont Hotel in Boston was the first hotel to offer indoor plumbing in 1829. Imagine the luxury! Modern conveniences we take for granted were revolutionary back then.",
      hashtags: "#IndoorPlumbing #BostonHistory #PlumbingInnovation",
      image: "/lovable-uploads/8ed1a7fa-72c9-4877-bc9c-361ece3f1f35.png"
    },
    {
      type: "Plumbing Tips",
      title: "Water Heater Safety",
      content: "For safety and efficiency, set your hot water heater to no hotter than 120 degrees Fahrenheit. Water at 140 degrees can cause burns in seconds! Stay safe and save energy.",
      hashtags: "#WaterHeaterSafety #HomeSafety #EnergyEfficiency",
      image: "/lovable-uploads/9c731eae-6dec-4d3e-b9a8-3a9d40ce6f20.png"
    },
    {
      type: "Plumbing Tips",
      title: "Stop Water Waste",
      content: "A leaky faucet dripping just twice a minute can waste over a gallon of water in a week! That's why regular checks are so important. Save water, save money!",
      hashtags: "#WaterConservation #PlumbingTips #SaveWater",
      image: "/lovable-uploads/d32834cf-89ab-4be3-b1fb-60949e2c43e7.png"
    },
    {
      type: "Behind the Scenes",
      title: "Professional Inspection",
      content: "Our expert technicians use state-of-the-art equipment to diagnose plumbing issues before they become major problems. Regular inspections save you time and money!",
      hashtags: "#PlumbingInspection #ExpertService #PreventativeMaintenance",
      image: "/lovable-uploads/c31abe2e-96d2-4b63-9cd2-39f17b0ae831.png"
    },
    {
      type: "Customer Spotlight",
      title: "Problem Solved!",
      content: "Another satisfied customer! We investigated and resolved a persistent toilet issue that had been bothering this homeowner for months. Quality service, guaranteed results.",
      hashtags: "#CustomerLove #ProblemSolved #QualityService",
      image: "/lovable-uploads/c7ae2c6c-0686-4d9a-afad-5228365167a7.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Button variant="outline" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Content Examples</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Here are examples of engaging social media content and video advertising for a plumbing company, 
            showcasing our comprehensive content strategy approach.
          </p>
        </div>

        {/* Social Media Posts Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Social Media Post Examples</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialMediaPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-blue-600 font-semibold mb-2">{post.type}</div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.content}</p>
                  <div className="text-sm text-blue-500">{post.hashtags}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Video Ad Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Video Advertisement Example</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Frank's Plumbing Services Video Ad</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-full"
                    poster="/placeholder.svg"
                  >
                    <source src="/Franks Plumbing Ad (720).mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Content Strategy Overview */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Content Strategy Pillars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Fun Facts & History",
                description: "Share interesting and surprising facts about plumbing, its history, and its impact on daily life."
              },
              {
                title: "Plumbing Tips & Tricks", 
                description: "Provide valuable advice on plumbing maintenance, common issues, and DIY solutions."
              },
              {
                title: "Behind the Scenes",
                description: "Showcase the team, their expertise, and day-to-day operations."
              },
              {
                title: "Customer Spotlights",
                description: "Highlight positive customer experiences and showcase successful projects."
              },
              {
                title: "Promotions & Services",
                description: "Directly promote services, special offers, and seasonal maintenance reminders."
              },
              {
                title: "Community Engagement",
                description: "Interact with the local community, participate in trends, and ask engaging questions."
              }
            ].map((pillar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ContentExamples;
