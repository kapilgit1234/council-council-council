import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Zap, User, Mail, Phone, Building, GraduationCap } from "lucide-react";
import Header from "@/components/layout/Header";
import GridBackground from "@/components/background/GridBackground";

const Registration = () => {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get('event');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const events = {
    "1": "QUANTUM ENERGY SYMPOSIUM",
    "2": "SUSTAINABLE TECH WORKSHOP", 
    "3": "AI IN ENERGY SYSTEMS",
    "4": "FUSION ENERGY SEMINAR"
  };

  const selectedEvent = eventId ? events[eventId as keyof typeof events] : "SELECT AN EVENT";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Registration successful! Confirmation email sent.");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen relative">
      <GridBackground />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-6 glitch-text text-glow" data-text="REGISTER">
              REGISTER
            </h1>
            <p className="text-xl text-muted-foreground">
              JOIN THE FUTURE OF ENERGY SCIENCE
              <br />
              <span className="text-primary font-bold">SECURE YOUR SPOT TODAY</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <Card className="holographic">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary flex items-center">
                    <Zap className="h-6 w-6 mr-2" />
                    EVENT REGISTRATION
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below to register for: <span className="text-primary font-bold">{selectedEvent}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-accent flex items-center">
                        <User className="h-5 w-5 mr-2" />
                        PERSONAL INFORMATION
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input 
                            id="firstName" 
                            required 
                            className="border-primary/30 focus:border-primary bg-input/50"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input 
                            id="lastName" 
                            required 
                            className="border-primary/30 focus:border-primary bg-input/50"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-primary" />
                          <Input 
                            id="email" 
                            type="email" 
                            required 
                            className="pl-10 border-primary/30 focus:border-primary bg-input/50"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-primary" />
                          <Input 
                            id="phone" 
                            type="tel" 
                            className="pl-10 border-primary/30 focus:border-primary bg-input/50"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Professional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-accent flex items-center">
                        <Building className="h-5 w-5 mr-2" />
                        PROFESSIONAL INFORMATION
                      </h3>

                      <div>
                        <Label htmlFor="organization">Organization/Institution *</Label>
                        <Input 
                          id="organization" 
                          required 
                          className="border-primary/30 focus:border-primary bg-input/50"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="position">Position/Title</Label>
                          <Input 
                            id="position" 
                            className="border-primary/30 focus:border-primary bg-input/50"
                          />
                        </div>
                        <div>
                          <Label htmlFor="experience">Experience Level</Label>
                          <Select>
                            <SelectTrigger className="border-primary/30 focus:border-primary bg-input/50">
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="student">Student</SelectItem>
                              <SelectItem value="researcher">Researcher</SelectItem>
                              <SelectItem value="professional">Professional</SelectItem>
                              <SelectItem value="academic">Academic</SelectItem>
                              <SelectItem value="industry">Industry Expert</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="interests">Research Interests/Areas of Focus</Label>
                        <Textarea 
                          id="interests" 
                          placeholder="Describe your research interests or professional focus areas..."
                          className="border-primary/30 focus:border-primary bg-input/50 min-h-[100px]"
                        />
                      </div>
                    </div>

                    {/* Event Selection */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-accent flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2" />
                        EVENT DETAILS
                      </h3>

                      <div>
                        <Label htmlFor="event">Select Event *</Label>
                        <Select defaultValue={eventId || ""}>
                          <SelectTrigger className="border-primary/30 focus:border-primary bg-input/50">
                            <SelectValue placeholder="Choose an event" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">QUANTUM ENERGY SYMPOSIUM</SelectItem>
                            <SelectItem value="2">SUSTAINABLE TECH WORKSHOP</SelectItem>
                            <SelectItem value="3">AI IN ENERGY SYSTEMS</SelectItem>
                            <SelectItem value="4">FUSION ENERGY SEMINAR</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="dietary">Dietary Restrictions/Special Requirements</Label>
                        <Textarea 
                          id="dietary" 
                          placeholder="Please specify any dietary restrictions or special accommodations needed..."
                          className="border-primary/30 focus:border-primary bg-input/50"
                        />
                      </div>
                    </div>

                    {/* Agreements */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="newsletter" />
                        <Label htmlFor="newsletter" className="text-sm">
                          Subscribe to our newsletter for future events and research updates
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the <span className="text-primary underline cursor-pointer">Terms and Conditions</span> and <span className="text-primary underline cursor-pointer">Privacy Policy</span> *
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-3 pulse-glow"
                    >
                      {isSubmitting ? "PROCESSING..." : "COMPLETE REGISTRATION"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Event Information Sidebar */}
            <div className="space-y-6">
              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">REGISTRATION INFO</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm">
                    <div className="text-accent font-semibold mb-1">REGISTRATION FEE:</div>
                    <div className="text-muted-foreground">Free for students</div>
                    <div className="text-muted-foreground">$50 for professionals</div>
                  </div>
                  
                  <div className="text-sm">
                    <div className="text-accent font-semibold mb-1">INCLUDED:</div>
                    <div className="text-muted-foreground">• All sessions access</div>
                    <div className="text-muted-foreground">• Networking lunch</div>
                    <div className="text-muted-foreground">• Digital materials</div>
                    <div className="text-muted-foreground">• Certificate</div>
                  </div>

                  <div className="text-sm">
                    <div className="text-accent font-semibold mb-1">CANCELLATION:</div>
                    <div className="text-muted-foreground">Free cancellation up to 48 hours before the event</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">NEED HELP?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-2">
                    <div className="text-muted-foreground">
                      Contact our events team:
                    </div>
                    <div className="text-accent">
                      events@energywave.edu
                    </div>
                    <div className="text-accent">
                      +1 (555) 123-4567
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Registration;