import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Atom,  Cpu,  Battery,  Sun, Wind,  Users, BookOpen,  Award,TrendingUp, Globe, ArrowRight } from "lucide-react"; 
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import GridBackground from "@/components/background/GridBackground";
import HeroSection from "@/components/sections/HeroSection";
import "./Index.css";

const Index = () => {
  const researchAreas = [
    {
      icon: Atom,
      title: "RENEWABLE ENERGY",
      description: "Driving innovation in solar, wind, and biofuels to create scalable, low-carbon power solutions for a sustainable future."
    },
    {
      icon: Cpu,
      title: "ICAER CONFERENCE",
      description: "DESE organizes the International Conference on Advances in Energy Research (ICAER) every two years. Since 2007, it has hosted nine successful editions, with the 10th ICAER scheduled for December 2025."
    },
    {
      icon: Battery,
      title: "ENERGY STORAGE",
      description: "Advancing ultra-safe Li-ion batteries, hydrogen storage reactors, and fuel cells to transform how the world stores and uses energy."
    },
    {
      icon: Sun,
      title: "VILLAGE & COMMUNITY PROJECTS",
      description: "DESE teams have implemented village electrification projects and even powered army bases at high altitude with solar systems, showcasing energy solutions in real-world contexts."
    },
    {
      icon: Wind,
      title: "GLOBAL IMPACT",
      description: "Recognized at Solar Decathlon competitions worldwide, with award-winning projects in Europe, China, USA, and beyond."
    },
    {
      icon: Zap,
      title: "DEPARTMENT GROWTH",
      description: "From 9 faculty and 36 students in 2007 to 28 faculty, ~450 students, and 200+ staff in 2024, DESE has become a hub for cutting-edge sustainable energy education and research."
    }
  ];

  const stats = [
    { number: "10,200+", label: "Staff & Project Staff", icon: BookOpen },
    { number: "25+", label: "FACULTY MEMBERS", icon: Users },
    { number: "400+", label: "STUDENTS", icon: Globe },
    { number: "70+", label: "Course Offered", icon: Award }
  ];

  const upcomingEvents = [
    {
      title: "Movie Night",
      
      type: "Exposure"
    },
    {
      title: "Department Trip",
      
      type: "Exposure"
    },
    
    {
      title: "Traditional Day",
      
      type: "Cultural"
    },
    
    
    {
      title: "Department Cricket Tournament",
      
      type: "Sports"
    },
    
    {
      title: "Energy Day",
      
      type: "Learnings"
    },
    {
      title: "Core talks",
      
      type: "Education"
    }
  ];

  const latestNews = [
    {
      title: "Dr. Pradnya received the best poster award in Critical Minerals Conference held on 2-4 sept 2025 in Perth Australia.",
    
      category: "Research"
    },
    {
      title: "Former DESE student Dr Abhinanda Sengupta's Ph.D thesis (guide: Prof Sagar Mitra) has been awarded Best Thesis Award at the prestigious KPIT Shodh Awards organized by KPIT Technologies Ltd. ",
      
      category: "Education"
    },
    {
      title: "DESE PhD student Mr Srikanta Panda working in “Materials for Hydrogen and Electrochemical Energy Lab” under the guidance of Prof Sankara Sarma V Tatiparti has won the Best Oral Presentation Award in the conference “International Conference on Hydrogen Energy and Advanced Materials (ICHEAM-2024)”, held at Banaras Hindu University during April 2024. ",
      
      category: "Research"
    },
    {
      title: "Prof Suryanarayana Doolla along with his co-authors, Dr Vijay AS, Mr Parth N and Prof Mukul Chandorkar have been recognized for their paper published in IEEE Transactions on Smart Grid. This paper has been selected in the top 5 papers chosen among over a thousand articles published in the IEEE Transactions on Smart Grid (TSG) in the past three years.",
     
      category: "Research"
    },
    {
      title: "Prof. Lalit Kumar and his research team have successfully developed a novel thermal management system design for battery packs. This cutting-edge design addresses one of the most critical challenges in modern energy storage — efficient heat dissipation and thermal stability of batteries.",
      
      category: "Technology"
    }
    
  ];

  return (
    <div className="min-h-screen relative">
      <GridBackground />
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      <main className="relative z-10">
        {/* Department Overview */}
        <section className="index-department-overview">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-primary text-glow">
                DEPARTMENT OVERVIEW
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                The Department of Energy Science and Engineering stands at the forefront of 
                <span className="text-primary font-bold"> sustainable energy innovation</span>, 
                combining cutting-edge research with practical applications to address the world's most pressing energy challenges.
              </p>
            </div>

            <div className="index-research-areas mb-16">
              {researchAreas.map((area, index) => (
                <Card key={index} className="holographic hover:pulse-glow transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center pulse-glow">
                        <area.icon className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-glow transition-all">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats Section */}
            <div className="index-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="text-center holographic p-6 rounded-lg group hover:pulse-glow transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-black text-primary mb-2 text-glow">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News & Events */}
        <section className="index-news-events">
          <div className="container mx-auto px-1">
            <div className="index-news-grid">
              {/* Latest News */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-primary text-glow">LATEST NEWS</h2>
                  
                </div>
                <div className="space-y-6">
                  {latestNews.map((news, index) => (
                    <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 text-xs">
                            {news.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{news.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-primary mb-2 hover:text-glow transition-colors cursor-pointer">
                          {news.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {news.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-primary text-glow">UPCOMING EVENTS</h2>
                  <Link to="/events">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      SEE PAST EVENTS
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <Card key={index} className="bg-card/50 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-[1.02]">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <Badge variant="outline" className="border-accent/50 text-accent text-xs">
                            {event.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{event.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-accent mb-2 hover:text-glow transition-colors cursor-pointer">
                          {event.title}
                        </h3>
                       
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="index-cta-section">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-primary text-glow">
                JOIN THE ENERGY REVOLUTION
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                Be part of groundbreaking research that's shaping the future of sustainable energy. 
                Explore our programs, collaborate with world-class researchers, and contribute to solutions 
                that will power tomorrow's world.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground pulse-glow font-bold text-lg px-8 py-4">
                    CONTACT US
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8 py-4">
                    EXPLORE RESOURCES
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="index-footer">
        <div className="container mx-auto px-6">
          <div className="index-footer-grid">
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">DESE</h3>
              <p className="text-sm text-muted-foreground">
                Department of Energy Science and Engineering
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-accent mb-3">QUICK LINKS</h4>
              <div className="space-y-2">
                <Link to="/events" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Events</Link>
                <Link to="/team" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Team</Link>
                <Link to="/resources" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Resources</Link>
                <Link to="/blog" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-accent mb-3">RESEARCH</h4>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Energy Storage and Batteries</div>
                <div className="text-sm text-muted-foreground">Perovskite Solar Cells & Advanced Fabrication</div>
                <div className="text-sm text-muted-foreground">Renewable Energy </div>
                <div className="text-sm text-muted-foreground">Material Science / Modeling / Simulation</div>
              </div>
            </div>
            <div >
              <h4 className="text-sm font-semibold text-accent mb-3">CONTACT</h4>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Kapil Chhipa</div>
                <div className="text-sm text-muted-foreground">ESA Web Secretary</div>
                <div className="text-sm text-muted-foreground">9950913954</div>
                <div className="text-sm text-muted-foreground">24b1516@iitb.ac.in</div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/20 mt-8 pt-8 text-center">
           <p className="text-sm text-muted-foreground text-center mt-4">
            © 2025 Department of Energy Science and Engineering. All rights reserved.  
            <br />
            Made with <span className="text-red-500">❤️</span> by the Energy Student Association.
          </p>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;