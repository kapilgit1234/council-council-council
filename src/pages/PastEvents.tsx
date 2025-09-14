import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import Header from "@/components/layout/Header";
import GridBackground from "@/components/background/GridBackground";

const PastEvents = () => {
  const pastEvents = [
    {
      id: 1,
      title: "NEURAL NETWORKS IN RENEWABLE ENERGY",
      description: "Deep learning applications for optimizing solar and wind energy systems",
      date: "2024-02-10",
      location: "Innovation Center",
      attendees: 180,
      category: "Conference",
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
      highlights: ["3 Keynote Speakers", "15 Research Papers", "Global Attendance"]
    },
    {
      id: 2,
      title: "BATTERY TECHNOLOGY BREAKTHROUGH",
      description: "Revolutionary advances in solid-state battery development",
      date: "2024-01-25",
      location: "Materials Lab",
      attendees: 95,
      category: "Workshop",
      imageUrl: "https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?w=400",
      highlights: ["Hands-on Labs", "Industry Partnerships", "Patent Applications"]
    },
    {
      id: 3,
      title: "HYDROGEN FUEL CELL SUMMIT",
      description: "Scaling hydrogen technology for commercial applications",
      date: "2024-01-15",
      location: "Energy Pavilion",
      attendees: 220,
      category: "Summit",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      highlights: ["Industry Leaders", "Policy Discussions", "Investment Opportunities"]
    },
    {
      id: 4,
      title: "SMART GRID CYBERSECURITY",
      description: "Protecting critical energy infrastructure from cyber threats",
      date: "2023-12-08",
      location: "Cybersecurity Lab",
      attendees: 140,
      category: "Seminar",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
      highlights: ["Security Protocols", "Real-world Simulations", "Best Practices"]
    },
    {
      id: 5,
      title: "GEOTHERMAL ENERGY EXPEDITION",
      description: "Field research on geothermal energy harvesting techniques",
      date: "2023-11-20",
      location: "Yellowstone Research Station",
      attendees: 65,
      category: "Field Study",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
      highlights: ["On-site Research", "Data Collection", "Environmental Impact Study"]
    },
    {
      id: 6,
      title: "CARBON CAPTURE INNOVATION",
      description: "Next-generation carbon capture and storage technologies",
      date: "2023-11-05",
      location: "Environmental Engineering",
      attendees: 160,
      category: "Conference",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400",
      highlights: ["Breakthrough Technologies", "Environmental Impact", "Commercial Viability"]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <GridBackground />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 glitch-text text-glow" data-text="PAST EVENTS">
              PAST EVENTS
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              EXPLORE OUR LEGACY OF GROUNDBREAKING CONFERENCES AND WORKSHOPS
              <br />
              <span className="text-primary font-bold">THAT SHAPED ENERGY INNOVATION</span>
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center holographic p-6 rounded-lg">
              <div className="text-3xl font-black text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">EVENTS HOSTED</div>
            </div>
            <div className="text-center holographic p-6 rounded-lg">
              <div className="text-3xl font-black text-accent mb-2">2.5K+</div>
              <div className="text-sm text-muted-foreground">PARTICIPANTS</div>
            </div>
            <div className="text-center holographic p-6 rounded-lg">
              <div className="text-3xl font-black text-secondary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">RESEARCH PAPERS</div>
            </div>
            <div className="text-center holographic p-6 rounded-lg pulse-glow">
              <div className="text-3xl font-black text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">INDUSTRY PARTNERS</div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 group overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      {event.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <ExternalLink className="h-5 w-5 text-white/80 group-hover:text-primary transition-colors" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-primary group-hover:text-glow transition-all">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-2 text-primary" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-2 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Users className="h-3 w-3 mr-2 text-primary" />
                      {event.attendees} attendees
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-accent mb-2">KEY HIGHLIGHTS:</div>
                    {event.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="holographic p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">STAY CONNECTED</h3>
              <p className="text-muted-foreground mb-6">
                Don't miss our upcoming events. Subscribe to our newsletter for the latest updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-input border border-primary/30 rounded-md text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                />
                <button className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors pulse-glow">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PastEvents;