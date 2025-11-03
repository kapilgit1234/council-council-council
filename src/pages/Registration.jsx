import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import Header from "@/components/layout/Header";
import GridBackground from "@/components/background/GridBackground";
import "./Registration.css";

const Registration = () => {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get("event");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Events based on query param
  const events = {
    "1": "QUANTUM ENERGY SYMPOSIUM",
    "2": "SUSTAINABLE TECH WORKSHOP",
    "3": "AI IN ENERGY SYSTEMS",
    "4": "FUSION ENERGY SEMINAR",
  };

  const selectedEvent = eventId ? events[eventId] : "SELECT AN EVENT";

  // Registration control config
  // mode: 'manual' | 'schedule'
  const REGISTRATION_CONTROL = {
    mode: "manual",
    enabled: false, // used when mode === 'manual'
    // schedule window (used when mode === 'schedule')
    startDate: "2025-11-01T00:00:00Z",
    endDate: "2025-11-30T23:59:59Z",
    perEvent: {
      // '1': true, '2': false // overrides per event
    },
  };

  const isRegistrationOpen = () => {
    // event-specific override if provided
    if (eventId && REGISTRATION_CONTROL.perEvent[eventId] !== undefined) {
      return !!REGISTRATION_CONTROL.perEvent[eventId];
    }

    if (REGISTRATION_CONTROL.mode === "manual") {
      return !!REGISTRATION_CONTROL.enabled;
    }

    // schedule mode
    try {
      const now = new Date();
      const start = new Date(REGISTRATION_CONTROL.startDate);
      const end = new Date(REGISTRATION_CONTROL.endDate);
      return now >= start && now <= end;
    } catch (err) {
      return !!REGISTRATION_CONTROL.enabled;
    }
  };

  // ✅ Your deployed Google Apps Script Web App URL
  const GOOGLE_SHEET_WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbxdr6gmwjSbhTcxvEoc4XS5JQtlRiSGV6MayfCIhGHQo-w2byIxkg55w2PeGiRgDd-E/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const fd = new FormData(form);
    const get = (key) => fd.get(key) ?? "";

    const formData = {
      timestamp: new Date().toISOString(),
      full_name: get("fullName"),
      roll_number: get("rollNumber"),
      ldap_id: get("ldapId"),
      phone_number: get("phone"),
      department_year: get("departmentYear"),
      programme: get("programme"),
      interests: get("interests"),
      participation_type: get("participationType"),
      any_question: get("question"),
      event_name: selectedEvent,
    };

    try {
      const urlParams = new URLSearchParams();
      Object.keys(formData).forEach((k) => urlParams.append(k, formData[k]));

      const response = await fetch(GOOGLE_SHEET_WEB_APP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlParams.toString(),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Registration submitted successfully!");
        form.reset();
      } else {
        toast.error(data.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen relative">
      <GridBackground />
      <Header />

      <main className="registration-main">
        <div className="registration-container">
          <div className="registration-header text-center">
            <h1
              className="text-5xl md:text-7xl font-black mb-6 glitch-text text-glow"
              data-text="REGISTER"
            >
              REGISTER
            </h1>
            <p className="text-xl text-muted-foreground">
              Step Into the Experience — Register Here
              <br />
              <span className="text-primary font-bold">Secure your spot today</span>
            </p>
          </div>

          <div className="registration-grid">
            <Card className="holographic">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary text-center">
                  EVENT REGISTRATIONs 
                </CardTitle>
                {selectedEvent !== "SELECT AN EVENT" && (
                  <p className="text-center text-sm text-muted-foreground mt-1">
                    {selectedEvent}
                  </p>
                )}
              </CardHeader>
              <CardContent>
                {isRegistrationOpen() ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input name="fullName" placeholder="Full Name *" required />
                    <Input name="rollNumber" placeholder="Roll Number *" required />
                    <Input name="ldapId" placeholder="LDAP ID *" required />
                    <Input name="phone" type="tel" placeholder="Phone Number" />

                    <Select name="departmentYear" defaultValue="">
                      <SelectTrigger>
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

                    <Select name="programme" defaultValue="">
                      <SelectTrigger>
                        <SelectValue placeholder="Programme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="B.Tech">B.Tech</SelectItem>
                        <SelectItem value="Dual Degree">B.Tech - M.Tech</SelectItem>
                        <SelectItem value="M.Tech">M.Tech</SelectItem>
                        <SelectItem value="M.Sc-Ph.D">M.Sc - Ph.D</SelectItem>
                        <SelectItem value="Ph.D">Ph.D</SelectItem>
                      </SelectContent>
                    </Select>

                    <Input name="interests" placeholder="What are you interested in?" />
                    <Select name="participationType" defaultValue="">
                      <SelectTrigger>
                        <SelectValue placeholder="Participation Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Single">Single</SelectItem>
                        <SelectItem value="Group">Group</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea name="question" placeholder="Any Question?" />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-3 pulse-glow"
                    >
                      {isSubmitting ? "PROCESSING..." : "COMPLETE REGISTRATION"}
                    </Button>
                  </form>
                ) : (
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold">Registration opening soon</h3>
                    <p className="text-muted-foreground mt-2">
                      Registrations for this event are not open yet. Please check back later.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Registration;
