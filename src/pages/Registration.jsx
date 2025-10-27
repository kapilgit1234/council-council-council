import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import Header from "@/components/layout/Header";
import GridBackground from "@/components/background/GridBackground";
import "./Registration.css";

const Registration = () => {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get("event");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const events = {
    "1": "QUANTUM ENERGY SYMPOSIUM",
    "2": "SUSTAINABLE TECH WORKSHOP",
    "3": "AI IN ENERGY SYSTEMS",
    "4": "FUSION ENERGY SEMINAR",
  };

  const selectedEvent = eventId ? events[eventId] : "SELECT AN EVENT";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      full_name: e.target.fullName.value,
      roll_number: e.target.rollNumber.value,
      ldap_id: e.target.ldapId.value,
      phone_number: e.target.phone.value,
      department_year: e.target.departmentYear.value,
      programme: e.target.programme.value,
      interests: e.target.interests.value,
      participation_type: e.target.participationType.value,
      any_question: e.target.question.value,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        e.target.reset();
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error!");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen relative">
      <GridBackground />
      <Header />

      <main className="registration-main">
        <div className="registration-container">
          <div className="registration-header">
            <h1 className="text-5xl md:text-7xl font-black mb-6 glitch-text text-glow" data-text="REGISTER">
              REGISTER
            </h1>
            <p className="text-xl text-muted-foreground">
              Step Into the Experience - Register Here
              <br />
              <span className="text-primary font-bold">Secure your spot today</span>
            </p>
          </div>

          <div className="registration-grid">
            <div>
              <Card className="holographic">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">
                    EVENT REGISTRATION
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <Input id="fullName" name="fullName" placeholder="Full Name *" required className="border-primary/30 focus:border-primary bg-input/50" />
                    </div>

                    {/* Roll Number */}
                    <div>
                      <Input id="rollNumber" name="rollNumber" placeholder="Roll Number *" required className="border-primary/30 focus:border-primary bg-input/50" />
                    </div>

                    {/* LDAP ID */}
                    <div>
                      <Input id="ldapId" name="ldapId" placeholder="LDAP ID *" required className="border-primary/30 focus:border-primary bg-input/50" />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <Input id="phone" name="phone" type="tel" placeholder="Phone Number" className="border-primary/30 focus:border-primary bg-input/50" />
                    </div>

                    {/* Department Year */}
                    <div>
                      <Select name="departmentYear" defaultValue="">
                        <SelectTrigger className="border-primary/30 focus:border-primary bg-input/50">
                          <SelectValue placeholder="Department Year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1st Year</SelectItem>
                          <SelectItem value="2">2nd Year</SelectItem>
                          <SelectItem value="3">3rd Year</SelectItem>
                          <SelectItem value="4">4th Year</SelectItem>
                          <SelectItem value="5">5th Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Programme */}
                    <div>
                      <Select name="programme" defaultValue="">
                        <SelectTrigger className="border-primary/30 focus:border-primary bg-input/50">
                          <SelectValue placeholder="Programme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Btech">B.Tech.</SelectItem>
                          <SelectItem value="Mtech">B.Tech. - M.Tech.</SelectItem>
                          <SelectItem value="Phd">M.Tech.</SelectItem>
                          <SelectItem value="Phd">M.Sc. - Ph.D.</SelectItem>
                          <SelectItem value="Phd">Ph.D.</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Interests / Event Name */}
                    <div>
                      <Input id="interests" name="interests" placeholder="What are you interested in? / Performance Name" className="border-primary/30 focus:border-primary bg-input/50" />
                    </div>

                    {/* Participation Type */}
                    <div>
                      <Select name="participationType" defaultValue="">
                        <SelectTrigger className="border-primary/30 focus:border-primary bg-input/50">
                          <SelectValue placeholder="Participation Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="group">Group</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Any Question */}
                    <div>
                      <Textarea id="question" name="question" placeholder="Any Question?" className="border-primary/30 focus:border-primary bg-input/50 min-h-[100px]" />
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Registration;
