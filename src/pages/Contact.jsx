import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle, Building } from "lucide-react";
import Header from "@/components/layout/Header";
import GridBackground from "@/components/background/GridBackground";
import "./Contact.css";

const Contact = () => {
  const locations = [
    {
      icon: Building,
      title: "Department Office",
      details: [
        "Department of Energy Science and Engineering,",
        "Indian Institute of Technology Bombay",
        "Powai, Mumbai, INDIA - 400 076",
        "Phone:  +91-22-2576-7890",
        "Fax:  +91-22-2576-4890",
        "E-mail:  office.ese[AT]iitb.ac.in"

      ]
    },
    {
      icon: UserCircle,
      title: "Head of the Department",
      details: [
        "Prof. Manaswita Bose",
        "Head, Department of Energy Science and Engineering,",
        "Indian Institute of Technology Bombay",
        "Powai, Mumbai, INDIA - 400 076",
        "Phone:+91-22-2576-7890",
        "E-mail: head.ese[AT]iitb.ac.in"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <GridBackground />
      <Header />

      <main className="contact-main">
        {/* Page Header */}
        <div className="contact-header text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black glitch-text text-glow" data-text="CONTACT">
            CONTACT
          </h1>
          <p className="text-xl text-muted-foreground mt-4">
           Get in Touch with Our Energy Science Department
            <br />
            <span className="text-primary font-bold">We are here to help you.</span>
          </p>
        </div>

        {/* Two Location Cards */}
        <div className="contact-container grid md:grid-cols-2 gap-8 mb-12 ">
          {locations.map((loc, index) => (
            <Card key={index} className="holographic hover:pulse-glow transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-lg text-primary flex items-center">
                  <loc.icon className="h-5 w-5 mr-2" />
                  {loc.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {loc.details.map((detail, i) => (
                  <p key={i} className="text-sm text-muted-foreground mb-1">{detail}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Big Rounded Map Card */}
        <Card className="holographic map-card">
          <CardContent className="p-0 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.484792698516!2d72.91614387484834!3d19.130245082085583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f46f5efab7%3A0x658cef834c9be370!2sEnergy%20Building%20IIT%20Bombay!5e0!3m2!1sen!2sin!4v1758532567654!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default Contact;
