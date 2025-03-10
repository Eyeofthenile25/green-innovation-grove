
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowRight, BookOpen, Video, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QAAccordion from '../components/QAAccordion';
import VideoCard from '../components/VideoCard';
import FeatureCard from '../components/FeatureCard';

const Awareness = () => {
  const [activeTab, setActiveTab] = useState("qa");
  
  const qas = [
    {
      question: "What is renewable energy?",
      answer: "Renewable energy comes from sources that naturally replenish themselves, such as sunlight, wind, rain, tides, waves, and geothermal heat. Unlike fossil fuels, these sources won't run out and generally have a much lower environmental impact."
    },
    {
      question: "Which renewable energy source is most efficient?",
      answer: "Efficiency varies by location and context. Solar PV panels typically convert 15-22% of sunlight into electricity, while wind turbines can convert up to 45% of wind energy. Hydroelectric power is one of the most efficient, converting up to 90% of available energy into electricity."
    },
    {
      question: "How much does it cost to install solar panels?",
      answer: "The cost varies widely based on location, system size, and quality. As of 2023, a typical residential solar panel system (5-10kW) costs between $15,000-$25,000 before tax credits and incentives, which can reduce costs by 30% or more. Prices continue to decline as technology improves."
    },
    {
      question: "Can renewable energy completely replace fossil fuels?",
      answer: "Yes, with proper implementation of a diverse mix of renewable sources, energy storage solutions, and grid modernization, renewable energy can theoretically replace fossil fuels entirely. Many countries are working toward 100% renewable energy goals, though the transition will take time and significant investment."
    },
    {
      question: "What are the environmental benefits of renewable energy?",
      answer: "Renewable energy significantly reduces greenhouse gas emissions and air pollution, minimizes water usage (except for some hydropower), reduces habitat destruction from fuel extraction, and decreases waste products associated with fossil fuels. This helps combat climate change and protect ecosystems."
    },
    {
      question: "How can I start using renewable energy at home?",
      answer: "You can start with simple steps like installing solar panels, using small wind turbines if suitable for your location, switching to a green energy provider, using solar water heaters, improving energy efficiency, and even participating in community solar projects if direct installation isn't possible."
    }
  ];
  
  const videos = [
    {
      title: "How Solar Panels Work – The Science Behind the Technology",
      description: "Learn the photovoltaic process and how solar panels convert sunlight into electricity in this quick explanation.",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnailSrc: "https://images.unsplash.com/photo-1509390144018-e91a5a7a19a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      duration: "3:45",
      author: "Energy Explained",
      views: "125K",
      date: "2 months ago"
    },
    {
      title: "Wind Energy Basics in 60 Seconds",
      description: "A quick overview of how wind turbines generate electricity and their environmental impact.",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnailSrc: "https://images.unsplash.com/photo-1569276012021-8e4229efaa77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      duration: "1:15",
      author: "Renewable Now",
      views: "98K",
      date: "3 weeks ago"
    },
    {
      title: "Hydropower Explained: Water to Watts",
      description: "Discover how moving water is transformed into electricity and why hydropower is one of our oldest renewable resources.",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      thumbnailSrc: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      duration: "2:30",
      author: "Earth Science",
      views: "76K",
      date: "1 month ago"
    },
    {
      title: "Geothermal Energy: Earth's Hidden Power",
      description: "How we harness heat from beneath the Earth's surface to generate reliable, constant renewable energy.",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      thumbnailSrc: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      duration: "4:10",
      author: "GeoScience Today",
      views: "52K",
      date: "2 months ago"
    }
  ];
  
  const diyProjects = [
    {
      title: "DIY Solar Phone Charger",
      description: "Build your own portable solar charger for smartphones and small devices with basic components.",
      icon: Wrench,
      color: "blue",
      link: "/diy-project-1"
    },
    {
      title: "Home Wind Turbine",
      description: "Create a small wind turbine from recycled materials to generate supplemental power for your home.",
      icon: Wrench,
      color: "green",
      link: "/diy-project-2"
    },
    {
      title: "Water-Powered LED Lights",
      description: "Harness flowing water to power LED lights using a simple mini-hydroelectric generator.",
      icon: Wrench,
      color: "purple",
      link: "/diy-project-3"
    },
    {
      title: "Solar Water Heater",
      description: "Construct an efficient solar water heater using common materials to reduce energy consumption.",
      icon: Wrench,
      color: "orange",
      link: "/diy-project-4"
    },
    {
      title: "Bicycle Power Generator",
      description: "Convert an old bicycle into a power generator that can charge small devices or batteries.",
      icon: Wrench,
      color: "red",
      link: "/diy-project-5"
    },
    {
      title: "Home Energy Monitor",
      description: "Build a simple energy monitoring system to track and optimize your household electricity usage.",
      icon: Wrench,
      color: "blue",
      link: "/diy-project-6"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-fade-in">
            <div className="subtitle text-anka-blue mb-2">Educational Resources</div>
            <h1 className="heading-2 mb-6">Renewable Energy Awareness</h1>
            <p className="text-anka-darkBlue/70 max-w-3xl mb-12">
              Explore our educational content to deepen your understanding of renewable energy concepts, technologies, and applications through engaging videos, comprehensive Q&A sessions, and hands-on DIY projects.
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-16">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/50 backdrop-blur-sm p-1 rounded-xl">
              <TabsTrigger 
                value="qa" 
                className="data-[state=active]:bg-anka-blue data-[state=active]:text-white py-3 flex items-center justify-center"
              >
                <BookOpen size={18} className="mr-2" />
                Q&A
              </TabsTrigger>
              <TabsTrigger 
                value="videos" 
                className="data-[state=active]:bg-anka-blue data-[state=active]:text-white py-3 flex items-center justify-center"
              >
                <Video size={18} className="mr-2" />
                Videos
              </TabsTrigger>
              <TabsTrigger 
                value="diy" 
                className="data-[state=active]:bg-anka-blue data-[state=active]:text-white py-3 flex items-center justify-center"
              >
                <Wrench size={18} className="mr-2" />
                DIY Projects
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="qa" className="animate-fade-in">
              <QAAccordion items={qas} />
            </TabsContent>
            
            <TabsContent value="videos">
              <div className="grid gap-6 md:grid-cols-2">
                {videos.map((video, index) => (
                  <VideoCard key={index} {...video} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="diy">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {diyProjects.map((project, index) => (
                  <FeatureCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    icon={project.icon}
                    link={project.link}
                    color={project.color}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-8 mt-12 mb-20 text-center">
            <h3 className="text-2xl font-semibold mb-4">Have Questions About Renewable Energy?</h3>
            <p className="text-anka-darkBlue/70 mb-6 max-w-2xl mx-auto">
              Get personalized answers and advice from our AI assistant about any renewable energy concept or project you're interested in.
            </p>
            <Link
              to="/ai-chat"
              className="inline-flex items-center px-6 py-3 rounded-full bg-anka-blue hover:bg-anka-blue/90 text-white font-medium transition-colors shadow-sm hover:shadow group"
            >
              Chat with AI Assistant
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Awareness;
