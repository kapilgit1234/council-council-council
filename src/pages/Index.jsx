import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ArrowRight, Beaker, Zap, Atom, Cpu, BookOpen, Mail, Phone, MapPin as MapPinIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { GridBackground } from "@/components/background/GridBackground";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import './Index.css';

const Index = () => {
  const researchAreas = [
    {
      title: "Renewable Energy Systems",
      description: "Advanced photovoltaic, wind, and hybrid renewable energy technologies",
      icon: <Zap className="h-8 w-8" />,
      projects: "12 Active Projects"
    },
    {
      title: "Energy Storage",
      description: "Next-generation battery technologies and grid-scale storage solutions",
      icon: <Atom className="h-8 w-8" />,
      projects: "8 Active Projects"
    },
    {
      title: "Smart Grid Technology",
      description: "Intelligent power distribution and energy management systems",
      icon: <Cpu className="h-8 w-8" />,
      projects: "15 Active Projects"
    },
    {
      title: "Nuclear Engineering",
      description: "Advanced reactor designs and nuclear safety technologies",
      icon: <Beaker className="h-8 w-8" />,
      projects: "6 Active Projects"
    }
  ];

  const stats = [
    { number: "50+", label: "Research Projects" },
    { number: "200+", label: "Publications" },
    { number: "30+", label: "Faculty Members" },
    { number: "$50M", label: "Research Funding" }
  ];

  const upcomingEvents = [
    {
      title: "Energy Innovation Summit 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Main Auditorium",
      attendees: 500
    },
    {
      title: "Renewable Energy Workshop",
      date: "March 22, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Lab Building A",
      attendees: 150
    }
  ];

  const latestNews = [
    {
      title: "Breakthrough in Solar Cell Efficiency",
      excerpt: "Our research team achieves 45% efficiency in perovskite solar cells...",
      date: "March 10, 2024",
      category: "Research"
    },
    {
      title: "New Partnership with Global Energy Corp",
      excerpt: "Department announces major collaboration for clean energy research...",
      date: "March 8, 2024",
      category: "Partnership"
    },
    {
      title: "Student Team Wins National Competition",
      excerpt: "Energy engineering students place first in sustainable design challenge...",
      date: "March 5, 2024",
      category: "Achievement"
    }
  ];

  return (
    <div className="min-h-screen">
      <GridBackground />
      <Header />
      <HeroSection />
      
      <main className="relative z-10">
        {/* Department Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-glow">ADVANCING ENERGY SCIENCE</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Leading research in sustainable energy technologies, from renewable systems to advanced nuclear engineering.
                Our department is at the forefront of solving the world's energy challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">RESEARCH AREAS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {researchAreas.map((area, index) => (
                <Card key={index} className="research-area-card border-glow">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 text-primary">
                      {area.icon}
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="mb-4">{area.description}</CardDescription>
                    <Badge variant="secondary" className="pulse-glow">{area.projects}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="stats-section">
              <h2 className="text-3xl font-bold text-center mb-12 text-glow">BY THE NUMBERS</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">LATEST NEWS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestNews.map((news, index) => (
                <Card key={index} className="news-card">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{news.category}</Badge>
                      <span className="text-sm text-muted-foreground">{news.date}</span>
                    </div>
                    <CardTitle className="text-lg">{news.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{news.excerpt}</CardDescription>
                    <Button variant="link" className="p-0 mt-4 text-primary hover:text-primary-glow">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="holographic">
                <Link to="/blog">VIEW ALL NEWS</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Upcoming Events Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">UPCOMING EVENTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="event-preview-card">
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date} at {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {event.attendees} Expected Attendees
                      </div>
                    </div>
                    <Button className="mt-6 w-full" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="pulse-glow">
                <Link to="/events">VIEW ALL EVENTS</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="cta-section">
              <h2 className="text-3xl font-bold mb-6 text-glow">JOIN OUR MISSION</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Be part of the energy revolution. Whether you're a student, researcher, or industry partner,
                we invite you to collaborate with us in shaping the future of energy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="holographic">
                  <Link to="/team">EXPLORE OPPORTUNITIES</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-glow">
                  <Link to="/contact">CONTACT US</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer-section py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Cpu className="h-8 w-8 text-primary mr-3" />
                  <span className="text-xl font-bold">EnergyWave</span>
                </div>
                <p className="text-muted-foreground">
                  Leading the future of energy science and engineering through innovative research and education.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/events" className="footer-link">Events</Link></li>
                  <li><Link to="/team" className="footer-link">Our Team</Link></li>
                  <li><Link to="/blog" className="footer-link">News & Blog</Link></li>
                  <li><Link to="/resources" className="footer-link">Resources</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Research Areas</h3>
                <ul className="space-y-2">
                  <li><span className="footer-link">Renewable Energy</span></li>
                  <li><span className="footer-link">Energy Storage</span></li>
                  <li><span className="footer-link">Smart Grids</span></li>
                  <li><span className="footer-link">Nuclear Engineering</span></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    info@energywave.edu
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    (555) 123-4567
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    123 Science Drive
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
              <p>&copy; 2024 Energy Science & Engineering Department. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;