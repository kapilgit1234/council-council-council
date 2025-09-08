import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import GridBackground from "@/components/background/GridBackground";
import './Events.css';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "QUANTUM ENERGY SYMPOSIUM",
      description: "Exploring the future of quantum computing in energy applications",
      date: "2024-03-15",
      time: "09:00 AM",
      location: "Energy Innovation Lab",
      attendees: 150,
      category: "Research",
      featured: true
    },
    {
      id: 2,
      title: "SUSTAINABLE TECH WORKSHOP",
      description: "Hands-on workshop on renewable energy technologies",
      date: "2024-03-22",
      time: "02:00 PM", 
      location: "Engineering Workshop",
      attendees: 75,
      category: "Workshop",
      featured: false
    },
    {
      id: 3,
      title: "AI IN ENERGY SYSTEMS",
      description: "Machine learning applications for smart grid optimization",
      date: "2024-04-05",
      time: "11:00 AM",
      location: "Virtual Conference",
      attendees: 200,
      category: "Conference",
      featured: true
    },
    {
      id: 4,
      title: "FUSION ENERGY SEMINAR",
      description: "Latest breakthroughs in nuclear fusion technology",
      date: "2024-04-12",
      time: "03:30 PM",
      location: "Physics Auditorium", 
      attendees: 120,
      category: "Seminar",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen relative">
      <GridBackground />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="events-header">
            <h1 className="events-title glitch-text text-glow" data-text="EVENTS">
              EVENTS
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              JOIN OUR CUTTING-EDGE CONFERENCES, WORKSHOPS, AND SEMINARS
              <br />
              <span className="text-primary font-bold">SHAPING THE FUTURE OF ENERGY</span>
            </p>
          </div>

          {/* Featured Events */}
          <div className="featured-events-section">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">FEATURED EVENTS</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.filter(event => event.featured).map((event) => (
                <Card key={event.id} className="holographic hover:pulse-glow transition-all duration-300 group featured-event-card">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="category-badge">
                        {event.category}
                      </Badge>
                      <Badge variant="outline" className="featured-badge">
                        FEATURED
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-glow transition-all">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="event-date-display">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="event-date-display">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        {event.time}
                      </div>
                      <div className="event-date-display">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                      <div className="event-date-display">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        {event.attendees} Expected Attendees
                      </div>
                    </div>
                    <Link to={`/events/register?event=${event.id}`}>
                      <Button className="w-full register-button">
                        REGISTER NOW
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Events */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">ALL UPCOMING EVENTS</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="event-card">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="category-badge">
                        {event.category}
                      </Badge>
                      {event.featured && (
                        <Badge variant="outline" className="featured-badge text-xs">
                          FEATURED
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg font-bold text-primary">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="event-meta-info">
                        <Calendar className="h-3 w-3 mr-2 text-primary" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="event-meta-info">
                        <MapPin className="h-3 w-3 mr-2 text-primary" />
                        {event.location}
                      </div>
                      <div className="event-meta-info">
                        <Users className="h-3 w-3 mr-2 text-primary" />
                        {event.attendees} attendees
                      </div>
                    </div>
                    <Link to={`/events/register?event=${event.id}`}>
                      <Button size="sm" className="w-full register-button">
                        REGISTER
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;