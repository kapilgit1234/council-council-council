import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Phone } from "lucide-react";
import Header from "@/components/layout/Header";
import GridBackground from "@/components/background/GridBackground";
import "./Team.css";

/**
 * Inline Instagram SVG to avoid extra dependency.
 */
const InstagramIcon = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zM17.5 6a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
  </svg>
);

/**
 * Helper to create sanitized tel href (removes spaces/dashes).
 */
const telHref = (phone) =>
  phone ? `tel:${phone.replace(/[^+\d]/g, "")}` : undefined;

const Team = () => {
  const leadership = [
    {
      name: "Ravi Kant Singh",
      title: "Department General Secretary",
      email: "21d170035@iitb.ac.in",
      phone: "+91-9259490294",
      linkedin: "https://www.linkedin.com/in/ravi-kant-singh-3a0789232/",
      instagram: "@_the_flying_monk_",
      image:
        "/ravi.png",
    },
    {
      name: "Aryan Sahu",
      title: "General Secretary",
      
      email: "23b1532@iitb.ac.in",
      phone: "+91-6306662049",
      linkedin: "https://www.linkedin.com/in/aryansahu0108/",
      instagram: "@aryansahu1.0",
      image:
        "/aryan.png",
    },
  ];

  const faculty = [
    {
      name: "Tiksha Tank",
      title: "Associate Secretary",
      email: "24b1514@iitb.ac.in",
      phone: "+91-9016319106",
      linkedin: "https://www.linkedin.com/in/tiksha-tank-1ba73928b/",
      instagram: "@tiksha_tank20",
      image:
        "/tank.png",
    },
    
    {
      name: "Rucha Ranade",
      title: "Associate Secretary",
      email: "24b1530@iitb.ac.in",
      phone: "+91-9322794791",
      linkedin: "https://www.linkedin.com/in/rucha-ranade-6b035533b/",
      instagram: "@righteous_ru_cha",
  image:
   "/rucha.png",
    },
    
    {
      name: "Tripti Gupta",
      title: "Design Secretary",
      email: "24b1541@iitb.ac.in",
      phone: "+91-7009432337",
      linkedin: " ",
      instagram: "@tripti_gupta_136",
      image:
        "/tripti.png",
    },
    
    {
      name: "Navneet Mathur",
      title: "Sports Secretary",
      email: "24b1510@iitb.ac.in",
      phone: "+91-9111061498",
      linkedin: "https://www.linkedin.com/in/navneet-mathur-52a929230/",
      instagram: "@navneetmathurr",
      image:
        "/navneet.png",
    },
    {
      name: "Kapil Chhipa",
      title: "Web Secretary",
      email: "24b1516@iitb.ac.in",
      phone: "+91-9950913954",
      linkedin: "https://www.linkedin.com/in/kapil-chhipa-05a741330/",
      instagram: "https://www.instagram.com/kapi_lchhipa?igsh=M2ZsNHAyM2o4dDR4",
    image:
      "/kapil.jpg",
    },
    {
      name: "Mann Gabani",
      title: "Media Secretary",
      email: "24b1505@iitb.ac.in",
      phone: "+91-9892214833",
      linkedin: "https://www.linkedin.com/in/mann-gabani-731ba9335/",
      instagram: "@mann_gabani",
      image:
        "/mann.jpg",
    },
  ];

  const researchers = [
    {
      name: "Abhishek Kumar Sharma",
      title: "Mtech Representative",
      
      email: "24m1348@iitb.ac.in",
      phone: "+91-6201601996",
      linkedin: "https://www.linkedin.com/in/abhishek-sharma-976575212/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/sonusehwag1234567/#",
      image:
        "/abhi.jpg",
    },
    {
      name: "Satvik Shukla",
      title: "MSc-PhD Representative",
      email: "24n0418@iitb.ac.in",
      phone: "+91-8122321127",
      linkedin: "https://www.linkedin.com/in/satvik-shukla-2303",
      instagram: "https://www.instagram.com/notpeetism/",
      image:
        "/satvik.png",
    },
    {
      name: "Tamal Halder ",
      title: "PhD Representative ",
     
      email: "23n0406@iitb.ac.in",
      phone: "+91-9002798384",
      linkedin: "https://www.linkedin.com/in/tamalhalderiitb",
      instagram: "https://www.instagram.com/tamalhalderiitb/",
      image:
        "/Tamal.png",
    },
    {
      name: "Aviral Jha",
      title: "PG Sports Secretary",
      
      email: "24d0631@iitb.ac.in",
      phone: "+91-9752106714",
      linkedin: " https://www.linkedin.com/in/aviral-jha-ab4797191",
      instagram: "1_.virtuoso._1",
      image:
        "/aviral.png",
    }
    
    
    
  ];

  return (
    <div className="min-h-screen relative">
      <GridBackground />
      <Header />

      <main className="team-main">
        <div className="team-container">
          {/* Header Section */}
          <div className="team-header text-center">
            <h1
              className="text-5xl md:text-7xl font-black mb-6 glitch-text text-glow"
              data-text="OUR TEAM"
            >
              OUR TEAM
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              <span className="text-primary font-bold">
                Meet the teams behind the scenes: the Department Secretary, UG Council, and PG Council.
                <br />
              </span>
            </p>
          </div>

          {/* Leadership Section */}
          <div className="team-leadership mt-12">
            <h2 className="team-leadership-title">ESA COUNCIL</h2>
            <div className="team-leadership-grid">
              {leadership
                .filter((m) => m.name && m.name.toLowerCase().includes("ravi"))
                .map((member, index) => (
                  <Card
                    key={`lead-${index}`}
                    className="holographic hover:pulse-glow transition-all duration-300 group"
                  >
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        width={160}
                        height={160}
                        loading="lazy"
                        className="w-40 h-40 rounded-full object-cover border-2 border-primary shadow-lg mb-4"
                      />
                      <h3 className="text-xl font-bold group-hover:text-glow transition-all">
                        {member.name}
                      </h3>
                      <p className="text-accent font-semibold">{member.title}</p>
                      <p className="text-muted-foreground text-sm mb-4">
                        {member.specialization}
                      </p>

                      <div className="member-contact flex space-x-4 mt-2">
                        <a
                          href={`mailto:${member.email}`}
                          className="icon-link icon-mail"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="h-5 w-5" />
                        </a>

                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-link icon-linkedin"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>

                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-link icon-instagram"
                          aria-label={`${member.name} on Instagram`}
                        >
                          <InstagramIcon className="h-5 w-5" />
                        </a>

                        <a
                          href={telHref(member.phone)}
                          className="icon-link icon-phone"
                          aria-label={`Call ${member.name}`}
                        >
                          <Phone className="h-5 w-5" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* UG COUNCIL */}
          <div className="team-faculty mt-12">
            <h2 className="team-faculty-title"></h2>

            {/* Aryan Sahu as a full-width top card */}
            {leadership
              .filter((m) => m.name && m.name.toLowerCase().includes("aryan"))
              .map((member, idx) => (
                <div key={`aryan-${idx}`} className="mb-6">
                  <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 group w-full min-h-[220px]">
                    <CardContent className="flex flex-col md:flex-row items-center justify-center text-center md:text-left p-6 gap-6 h-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        width={160}
                        height={160}
                        loading="lazy"
                        className="w-40 h-40 rounded-full object-cover border border-primary shadow-md"
                      />
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-glow transition-all">{member.name}</h3>
                        <p className="text-accent text-sm mb-2">{member.title}</p>
                        <p className="text-muted-foreground text-sm mb-3">{member.specialization}</p>
                        <div className="member-contact flex space-x-3">
                          <a href={`mailto:${member.email}`} className="icon-link icon-mail" aria-label={`Email ${member.name}`}>
                            <Mail className="h-4 w-4" />
                          </a>
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link icon-linkedin" aria-label={`${member.name} on LinkedIn`}>
                            <Linkedin className="h-4 w-4" />
                          </a>
                          <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="icon-link icon-instagram" aria-label={`${member.name} on Instagram`}>
                            <InstagramIcon className="h-4 w-4" />
                          </a>
                          <a href={telHref(member.phone)} className="icon-link icon-phone" aria-label={`Call ${member.name}`}>
                            <Phone className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}

            {/* The rest of the UG Council (faculty cards) */}
            <div className="team-faculty-grid">
              {faculty.map((member, index) => (
                <Card
                  key={`fac-${index}`}
                  className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      loading="lazy"
                      className="w-32 h-32 rounded-full object-cover border border-primary shadow-md mb-3"
                    />
                    <h3 className="text-lg font-semibold group-hover:text-glow transition-all">
                      {member.name}
                    </h3>
                    <p className="text-accent text-sm">{member.title}</p>
                    <p className="text-muted-foreground text-xs mb-3">
                      {member.specialization}
                    </p>

                    <div className="member-contact flex space-x-3">
                      <a href={`mailto:${member.email}`} className="icon-link icon-mail" aria-label={`Email ${member.name}`}>
                        <Mail className="h-4 w-4" />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link icon-linkedin" aria-label={`${member.name} on LinkedIn`}>
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="icon-link icon-instagram" aria-label={`${member.name} on Instagram`}>
                        <InstagramIcon className="h-4 w-4" />
                      </a>
                      <a href={telHref(member.phone)} className="icon-link icon-phone" aria-label={`Call ${member.name}`}>
                        <Phone className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* PG COUNCIL */}
          <div className="team-researchers mt-12">
            <h2 className="team-researchers-title">PG COUNCIL</h2>
            <div className="team-researchers-grid">
              {researchers.map((member, index) => (
                <Card
                  key={`res-${index}`}
                  className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="h-full flex flex-col items-center text-center p-6 justify-between">
                    <img
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      loading="lazy"
                      className="w-32 h-32 rounded-full object-cover border border-primary shadow-md mb-3"
                    />
                    <h3 className="text-lg font-semibold group-hover:text-glow transition-all">
                      {member.name}
                    </h3>
                    <p className="text-accent text-sm">{member.title}</p>
                    <p className="text-muted-foreground text-xs mb-3">
                      {member.specialization}
                    </p>

                    <div className="member-contact flex space-x-3">
                      <a href={`mailto:${member.email}`} className="icon-link icon-mail" aria-label={`Email ${member.name}`}>
                        <Mail className="h-4 w-4" />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link icon-linkedin" aria-label={`${member.name} on LinkedIn`}>
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="icon-link icon-instagram" aria-label={`${member.name} on Instagram`}>
                        <InstagramIcon className="h-4 w-4" />
                      </a>
                      <a href={telHref(member.phone)} className="icon-link icon-phone" aria-label={`Call ${member.name}`}>
                        <Phone className="h-4 w-4" />
                      </a>
                    </div>
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

export default Team;
