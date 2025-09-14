import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, GraduationCap, Award, BookOpen } from "lucide-react";
import Header from "@/components/layout/Header";
import GridBackground from "@/components/background/GridBackground";
import "./Team.css";

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
      
      <main className="team-main">
        <div className="team-container">
          {/* Header Section */}
          <div className="team-header">
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
          <div className="team-leadership">
            <h2 className="team-leadership-title">LEADERSHIP</h2>
            <div className="team-leadership-grid">
              {leadership.map((member, index) => (
                <Card key={index} className="holographic hover:pulse-glow transition-all duration-300 group">
                  <CardContent className="team-member-content">
                    <div className="team-member-avatar-large">
                      <GraduationCap className="h-16 w-16 text-primary" />
                    </div>
                    
                    <h3 className="team-member-name-large group-hover:text-glow transition-all">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold mb-1">{member.title}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.specialization}</p>
                    
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 mb-4">
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
                          <div key={i} className="flex items-center justify-center text-xs text-muted-foreground">
                            <Award className="h-3 w-3 mr-2 text-primary" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <a href={`mailto:${member.email}`} className="text-primary hover:text-accent transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-primary hover:text-accent transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Faculty Section */}
          <div className="team-faculty">
            <h2 className="team-faculty-title">FACULTY</h2>
            <div className="team-faculty-grid">
              {faculty.map((member, index) => (
                <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
                  <CardContent className="team-member-content-small">
                    <div className="team-member-avatar-medium">
                      <GraduationCap className="h-10 w-10 text-primary" />
                    </div>
                    
                    <h3 className="team-member-name-medium group-hover:text-glow transition-all">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold text-sm mb-1">{member.title}</p>
                    <p className="text-muted-foreground text-xs mb-3">{member.specialization}</p>
                    
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 text-xs mb-3">
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

                    <div className="flex justify-center space-x-3">
                      <a href={`mailto:${member.email}`} className="text-primary hover:text-accent transition-colors">
                        <Mail className="h-4 w-4" />
                      </a>
                      <a href="#" className="text-primary hover:text-accent transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Researchers Section */}
          <div className="team-researchers">
            <h2 className="team-researchers-title">RESEARCHERS</h2>
            <div className="team-researchers-grid">
              {researchers.map((member, index) => (
                <Card key={index} className="bg-card/30 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                  <CardContent className="team-member-content-tiny">
                    <div className="team-member-avatar-small">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    
                    <h3 className="team-member-name-small">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold text-sm mb-1">{member.title}</p>
                    <p className="text-muted-foreground text-xs mb-2">{member.specialization}</p>
                    
                    <div className="text-xs text-muted-foreground mb-2">
                      {member.education}
                    </div>

                    <div className="text-xs">
                      <span className="text-accent font-semibold">Focus: </span>
                      <span className="text-muted-foreground">{member.focus}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Join Our Team CTA */}
          <div className="team-cta">
            <div className="team-cta-card">
              <h3 className="team-cta-title">JOIN OUR TEAM</h3>
              <p className="team-cta-description">
                We're always looking for brilliant minds to join our mission of advancing energy science and engineering.
              </p>
              <div className="team-cta-buttons">
                <a href="/careers" className="team-cta-button-primary">
                  VIEW OPENINGS
                </a>
                <a href="/contact" className="team-cta-button-secondary">
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