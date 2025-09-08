import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, GraduationCap, Award, BookOpen } from "lucide-react";
import Header from "@/components/layout/Header";
import GridBackground from "@/components/background/GridBackground";
import './Team.css';

const Team = () => {
  const leadership = [
    {
      name: "Dr. Elena Rodriguez",
      title: "Department Head & Professor",
      specialization: "Quantum Energy Systems",
      education: "PhD in Physics, MIT",
      experience: "15+ years",
      achievements: ["NSF Career Award", "IEEE Fellow", "50+ Publications"],
      email: "e.rodriguez@energywave.edu",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Prof. James Chen",
      title: "Associate Professor",
      specialization: "Renewable Energy Systems", 
      education: "PhD in Electrical Engineering, Stanford",
      experience: "12+ years",
      achievements: ["DOE Early Career Award", "Top 1% Cited Researcher", "Tesla Innovation Grant"],
      email: "j.chen@energywave.edu",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const faculty = [
    {
      name: "Dr. Sarah Kim",
      title: "Assistant Professor", 
      specialization: "Battery Technology",
      education: "PhD in Materials Science, Caltech",
      experience: "8+ years",
      achievements: ["MIT TR35 Innovator", "10+ Patents", "Samsung Research Partnership"],
      email: "s.kim@energywave.edu",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Prof. Michael Torres",
      title: "Professor",
      specialization: "Fusion Energy",
      education: "PhD in Nuclear Engineering, Berkeley",
      experience: "20+ years",
      achievements: ["ITER Collaboration", "Fusion Pioneer Award", "100+ Publications"],
      email: "m.torres@energywave.edu", 
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Aisha Patel",
      title: "Research Professor",
      specialization: "Smart Grid Technology",
      education: "PhD in Computer Science, CMU",
      experience: "14+ years",
      achievements: ["Google Research Award", "AI in Energy Pioneer", "IEEE Outstanding Paper"],
      email: "a.patel@energywave.edu",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Robert Johnson",
      title: "Associate Professor",
      specialization: "Geothermal Systems",
      education: "PhD in Geological Engineering, Colorado School of Mines",
      experience: "16+ years",
      achievements: ["Geothermal Excellence Award", "NREL Partnership", "Energy Storage Breakthrough"],
      email: "r.johnson@energywave.edu",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const researchers = [
    {
      name: "Dr. Lisa Wang",
      title: "Postdoctoral Researcher",
      specialization: "Artificial Intelligence in Energy",
      education: "PhD in AI, Stanford",
      focus: "Machine Learning for Grid Optimization"
    },
    {
      name: "Alex Martinez",
      title: "PhD Candidate",
      specialization: "Hydrogen Fuel Cells",
      education: "MS in Chemical Engineering, MIT",
      focus: "Catalyst Design for H2 Production"
    },
    {
      name: "Dr. Kevin Liu",
      title: "Research Scientist",
      specialization: "Solar Technology",
      education: "PhD in Physics, Princeton",
      focus: "Perovskite Solar Cell Efficiency"
    },
    {
      name: "Maria Gonzalez",
      title: "Graduate Research Assistant",
      specialization: "Energy Storage",
      education: "MS in Materials Science, Georgia Tech",
      focus: "Next-Gen Battery Chemistries"
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
            <h1 className="text-5xl md:text-7xl font-black mb-6 glitch-text text-glow" data-text="OUR TEAM">
              OUR TEAM
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              MEET THE BRILLIANT MINDS DRIVING ENERGY INNOVATION
              <br />
              <span className="text-primary font-bold">WORLD-CLASS RESEARCHERS & EDUCATORS</span>
            </p>
          </div>

          {/* Leadership Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">LEADERSHIP</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {leadership.map((member, index) => (
                <Card key={index} className="leadership-card team-member-card holographic hover:pulse-glow">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="member-avatar">
                        <GraduationCap className="h-16 w-16 text-primary" />
                      </div>
                      
                      <h3 className="member-name">
                        {member.name}
                      </h3>
                      <p className="member-title">{member.title}</p>
                      <p className="member-specialization">{member.specialization}</p>
                      
                      <Badge variant="secondary" className="experience-badge">
                        {member.experience}
                      </Badge>

                      <div className="space-y-2 mb-6 text-sm">
                        <div className="flex items-center justify-center text-muted-foreground">
                          <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                          {member.education}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="text-xs font-semibold text-accent mb-2">KEY ACHIEVEMENTS:</div>
                        <div className="space-y-1">
                          {member.achievements.map((achievement, i) => (
                            <div key={i} className="achievement-item">
                              <Award className="h-3 w-3 mr-2 text-primary" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="contact-links">
                        <a href={`mailto:${member.email}`} className="contact-link">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="contact-link">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Faculty Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">FACULTY</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {faculty.map((member, index) => (
                <Card key={index} className="faculty-card team-member-card">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="faculty-avatar">
                        <GraduationCap className="h-10 w-10 text-primary" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-primary mb-1 member-name">
                        {member.name}
                      </h3>
                      <p className="member-title text-sm">{member.title}</p>
                      <p className="member-specialization text-xs">{member.specialization}</p>
                      
                      <Badge variant="secondary" className="experience-badge text-xs">
                        {member.experience}
                      </Badge>

                      <div className="space-y-1 mb-4 text-xs">
                        <div className="flex items-center justify-center text-muted-foreground">
                          <GraduationCap className="h-3 w-3 mr-1 text-primary" />
                          <span className="truncate">{member.education}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-xs font-semibold text-accent mb-1">ACHIEVEMENTS:</div>
                        <div className="space-y-1">
                          {member.achievements.slice(0, 2).map((achievement, i) => (
                            <div key={i} className="text-xs text-muted-foreground">
                              • {achievement}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="contact-links">
                        <a href={`mailto:${member.email}`} className="contact-link">
                          <Mail className="h-4 w-4" />
                        </a>
                        <a href="#" className="contact-link">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Researchers Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">RESEARCHERS</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchers.map((member, index) => (
                <Card key={index} className="researcher-card">
                  <CardContent className="p-5">
                    <div className="text-center">
                      <div className="researcher-avatar">
                        <BookOpen className="h-8 w-8 text-primary" />
                      </div>
                      
                      <h3 className="text-base font-bold text-primary mb-1">
                        {member.name}
                      </h3>
                      <p className="member-title text-sm">{member.title}</p>
                      <p className="member-specialization text-xs">{member.specialization}</p>
                      
                      <div className="text-xs text-muted-foreground mb-2">
                        {member.education}
                      </div>

                      <div className="text-xs">
                        <span className="text-accent font-semibold">Focus: </span>
                        <span className="text-muted-foreground">{member.focus}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Join Our Team CTA */}
          <div className="text-center">
            <div className="join-team-cta holographic">
              <h3 className="text-3xl font-bold text-primary mb-4">JOIN OUR TEAM</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for brilliant minds to join our mission of advancing energy science and engineering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/careers" className="cta-button-primary">
                  VIEW OPENINGS
                </a>
                <a href="/contact" className="cta-button-secondary">
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Team;