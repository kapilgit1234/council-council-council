import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Atom, 
  Cpu, 
  Battery, 
  Sun, 
  Wind, 
  Users, 
  BookOpen, 
  Award,
  TrendingUp,
  Globe,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import GridBackground from "@/components/background/GridBackground";
import HeroSection from "@/components/sections/HeroSection";
import "./Index.css";

const Index = () => {
  const researchAreas = [
    {
      icon: Atom,
      title: "QUANTUM ENERGY",
      description: "Harnessing quantum mechanics to revolutionize energy generation and storage systems"
    },
    {
      icon: Cpu,
      title: "AI & SMART GRIDS",
      description: "Machine learning algorithms optimizing energy distribution and consumption patterns"
    },
    {
      icon: Battery,
      title: "ENERGY STORAGE",
      description: "Next-generation battery technologies and alternative storage solutions"
    },
    {
      icon: Sun,
      title: "SOLAR INNOVATION",
      description: "Advanced photovoltaic systems and solar energy conversion technologies"
    },
    {
      icon: Wind,
      title: "RENEWABLE SYSTEMS",
      description: "Wind, hydro, and geothermal energy systems for sustainable power generation"
    },
    {
      icon: Zap,
      title: "FUSION TECHNOLOGY",
      description: "Nuclear fusion research for unlimited clean energy production"
    }
  ];

  const stats = [
    { number: "150+", label: "RESEARCH PAPERS", icon: BookOpen },
    { number: "50+", label: "FACULTY MEMBERS", icon: Users },
    { number: "25+", label: "INDUSTRY PARTNERS", icon: Globe },
    { number: "15+", label: "AWARDS WON", icon: Award }
  ];

  const upcomingEvents = [
    {
      title: "QUANTUM ENERGY SYMPOSIUM",
      date: "March 15, 2024",
      type: "Research Conference"
    },
    {
      title: "AI IN ENERGY SYSTEMS",
      date: "April 5, 2024", 
      type: "Technical Workshop"
    },
    {
      title: "FUSION ENERGY SEMINAR",
      date: "April 12, 2024",
      type: "Industry Talk"
    }
  ];

  const latestNews = [
    {
      title: "BREAKTHROUGH IN QUANTUM BATTERY TECHNOLOGY",
      excerpt: "Our research team achieves 400% improvement in energy density using quantum entanglement principles.",
      date: "Feb 28, 2024",
      category: "Research"
    },
    {
      title: "AI-POWERED SMART GRID OPTIMIZATION",
      excerpt: "Machine learning algorithms enable 35% better efficiency in electrical grid management.",
      date: "Feb 25, 2024",
      category: "Technology"
    },
    {
      title: "$50M FUSION RESEARCH GRANT AWARDED",
      excerpt: "Department receives major funding for next-generation fusion reactor development.",
      date: "Feb 22, 2024",
      category: "Funding"
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
          <div className="container mx-auto px-6">
            <div className="index-news-grid">
              {/* Latest News */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-primary text-glow">LATEST NEWS</h2>
                  <Link to="/blog">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      VIEW ALL
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
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
                      VIEW ALL
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
                        <Link to="/events/register">
                          <Button size="sm" className="bg-accent/80 hover:bg-accent text-accent-foreground font-semibold">
                            REGISTER NOW
                          </Button>
                        </Link>
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
                    GET INVOLVED
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
              <h3 className="text-lg font-bold text-primary mb-4">ENERGYWAVE</h3>
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
                <div className="text-sm text-muted-foreground">Quantum Energy</div>
                <div className="text-sm text-muted-foreground">Fusion Technology</div>
                <div className="text-sm text-muted-foreground">Smart Grids</div>
                <div className="text-sm text-muted-foreground">Energy Storage</div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-accent mb-3">CONTACT</h4>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">info@energywave.edu</div>
                <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                <div className="text-sm text-muted-foreground">Energy Science Building</div>
                <div className="text-sm text-muted-foreground">University Campus</div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/20 mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Department of Energy Science and Engineering. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;