import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send, Building } from "lucide-react";
import Header from "@/components/layout/Header";
import GridBackground from "@/components/background/GridBackground";
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Message sent successfully! We'll get back to you soon.");
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Building,
      title: "DEPARTMENT OFFICE",
      details: [
        "Energy Science Building",
        "Room 301, 3rd Floor",
        "University Campus"
      ]
    },
    {
      icon: Mail,
      title: "EMAIL",
      details: [
        "info@energywave.edu",
        "admissions@energywave.edu",
        "research@energywave.edu"
      ]
    },
    {
      icon: Phone,
      title: "PHONE",
      details: [
        "Main: +1 (555) 123-4567",
        "Admissions: +1 (555) 123-4568",
        "Research: +1 (555) 123-4569"
      ]
    },
    {
      icon: Clock,
      title: "OFFICE HOURS",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 10:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const locations = [
    {
      name: "MAIN CAMPUS",
      address: "123 Innovation Drive, Tech City, TC 12345",
      description: "Primary research facilities and administrative offices"
    },
    {
      name: "RESEARCH LAB",
      address: "456 Science Park Way, Tech City, TC 12346", 
      description: "Advanced energy research and development center"
    },
    {
      name: "TESTING FACILITY",
      address: "789 Engineering Road, Tech City, TC 12347",
      description: "Large-scale energy system testing and validation"
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
            <h1 className="text-5xl md:text-7xl font-black mb-6 glitch-text text-glow" data-text="CONTACT">
              CONTACT
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              GET IN TOUCH WITH OUR ENERGY SCIENCE DEPARTMENT
              <br />
              <span className="text-primary font-bold">WE'RE HERE TO HELP</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="contact-form holographic">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary flex items-center">
                    <Send className="h-6 w-6 mr-2" />
                    SEND US A MESSAGE
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          required 
                          className="form-input"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          required 
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="input-icon" />
                        <Input 
                          id="email" 
                          type="email" 
                          required 
                          className="pl-10 form-input"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="input-icon" />
                        <Input 
                          id="phone" 
                          type="tel" 
                          className="pl-10 form-input"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="organization">Organization/Institution</Label>
                      <Input 
                        id="organization" 
                        className="form-input"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select>
                        <SelectTrigger className="form-input">
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admissions">Admissions Inquiry</SelectItem>
                          <SelectItem value="research">Research Collaboration</SelectItem>
                          <SelectItem value="events">Events & Conferences</SelectItem>
                          <SelectItem value="partnerships">Industry Partnerships</SelectItem>
                          <SelectItem value="media">Media & Press</SelectItem>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        required
                        placeholder="Please provide details about your inquiry..."
                        className="form-input min-h-[120px]"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full submit-button"
                    >
                      {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="contact-info-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="contact-icon-wrapper">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-primary mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, i) => (
                              <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Links */}
              <Card className="contact-info-card">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">QUICK LINKS</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <a href="/events" className="quick-links-item">
                      → Upcoming Events
                    </a>
                    <a href="/resources" className="quick-links-item">
                      → Research Resources
                    </a>
                    <a href="/team" className="quick-links-item">
                      → Faculty Directory
                    </a>
                    <a href="/blog" className="quick-links-item">
                      → Latest Research
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="emergency-contact-card">
                <CardHeader>
                  <CardTitle className="text-lg text-accent">EMERGENCY CONTACT</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm">
                    <p className="text-muted-foreground mb-2">
                      For urgent matters after hours:
                    </p>
                    <p className="text-accent font-bold">
                      +1 (555) 123-HELP
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Available 24/7 for safety emergencies only
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Locations Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">OUR LOCATIONS</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <Card key={index} className="location-card">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      {location.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{location.address}</p>
                    <p className="text-xs text-accent">{location.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-16">
            <Card className="holographic">
              <CardContent className="p-0">
                <div className="map-placeholder">
                  <div className="text-center">
                    <MapPin className="map-icon" />
                    <h3 className="text-2xl font-bold text-primary mb-2">INTERACTIVE MAP</h3>
                    <p className="text-muted-foreground">Campus map and directions coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;