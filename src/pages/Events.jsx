import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import GridBackground from "@/components/background/GridBackground";
import Slider from "react-slick";
import "./Events.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Events = () => {
  // Upcoming Events (cards)
  const upcomingEvents = [
    {
      id: 1,
      title: "Department Movie Night",
      description: "Exploring the bond between your department guys.",
      date: "coming soon",
      time: "09:00 PM",
      location: "Seminar Room",
      category: "Exposure",
      image: "/night.png",
    },
    {
      id: 2,
      title: "Traditional Day",
      description: "Enjoying the cultural event and make memories.",
      date: "",
      time: "06:00 PM",
      location: "Old SAC",
     
      category: "Cultural",
      image: "/trad.jpg",
    },
  ];

  // Past Events (carousel only)
  const pastEvents = [
    { id: 1, title: "AI IN ENERGY SYSTEMS", image: "/i1.png" },
    { id: 2, title: "FUSION ENERGY SEMINAR", image: "/i2.png" },
    { id: 3, title: "Cultural Night", image: "/i3.png" },
    { id: 4, title: "Sports Fest", image: "/i4.png" },
    { id: 5, title: "Guest Lecture Series", image: "/i5.png" },
    { id: 6, title: "Guest Lecture Series", image: "/badminton.png" },
    
    { id: 7, title: "Department Picnic", image: "/i7.png" },
    { id: 8, title: "Tech Symposium", image: "/i8.png" },
    { id: 9, title: "Alumni Meet", image: "/i9.png" },
    { id: 10, title: "Charity Run", image: "/i10.png" },
    { id: 11, title: "Energy Conservation Week", image: "/i11.png" },
    { id: 12, title: "Hackathon", image: "/i12.png" },
  ];

  // Carousel settings for past memories
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="min-h-screen relative">
      <GridBackground />
      <Header />

      <main className="events-main">
        <div className="events-container">
          {/* Header Section */}
          <div className="events-header">
            <h1
              className="text-5xl md:text-7xl font-black mb-6 glitch-text text-glow"
              data-text="EVENTS"
            >
              EVENTS
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              <span className="text-primary font-bold">
                "Catch a glimpse of our department’s vibrant events – where
                memories are made, bonds are built, and every moment counts."
              </span>
            </p>
          </div>

          {/* Two Upcoming Event Cards */}
          <div className="events-featured">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              UPCOMING EVENTS
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <Card
                  key={event.id}
                  className="holographic hover:pulse-glow transition-all duration-300 group overflow-hidden"
                >
                  {/* Event Image */}
                  {event.image && (
                    <img
                      src={event.image}
                      alt={event.title}
                      width={1200}
                      height={480}
                      loading="lazy"
                      className="w-full h-72 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  {/* Minimal Content */}
                  <CardHeader className="p-3">
                    <div className="flex justify-between items-center mb-1">
                      <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary border-primary/30 text-[10px] px-2 py-0.5"
                      >
                        {event.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-accent text-accent text-[10px] px-2 py-0.5"
                      >
                        UPCOMING
                      </Badge>
                    </div>
                    <CardTitle className="text-base font-bold text-primary group-hover:text-glow transition-all">
                      {event.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-3">
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1 text-primary" />
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1 text-primary" />
                        {event.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Past Memories – Carousel */}
          <div className="events-all-section mt-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              PAST MEMORIES
            </h2>
            <Slider {...carouselSettings} className="events-photo-carousel">
              {pastEvents.map((event) => (
                <div key={event.id} className="carousel-slide">
                  <img
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={300}
                    loading="lazy"
                    className="carousel-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
