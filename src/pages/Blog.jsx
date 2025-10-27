import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Eye, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import GridBackground from "@/components/background/GridBackground";
import { useState } from "react";
import "./Blog.css"; // CSS for shine outline

const Blog = () => {
  const blogPosts = [
    {
  id: 1,
  title: "Industrial Visit to TATA Power Khopoli Plant",
  excerpt: "A group of Energy Science and Engineering students explore the inner workings of TATA Power's hydroelectric plant, learning about Pelton turbines, pumped storage, and sustainable energy solutions.",
  author: "Rucha Ranade",
  date: "2025-09-25",
  
  category: "Exposure",
  views: "150",
  tags: ["Hydroelectric Power", "Renewable Energy", "Industrial Visit"]
},

   {
  id: 2,
  title: "Third-year Internship by Daksh Jain at Nuvama Wealth & Asset Management (Edelweiss)",
  excerpt: "Daksh Jain shares his experience in equity research at Nuvama Wealth & Asset Management, analyzing businesses, financial performance, and publishing sell-side reports.",
  author: "Daksh Jain",
  date: "2024-12-30",
 
  category: "Intern Diaries",
  views: "",
  tags: ["Finance", "Equity Research", "Internship"]
},

    {
  id: 3,
  title: "Third Year Summer Internship by Karthikeyan at NoBroker",
  excerpt: "Karthikeyan shares his hands-on experience in the Data Science team at NoBroker, working on advanced Deep Learning and NLP projects during Summer 2024.",
  author: "Karthikeyan",
  date: "2024-12-30",
 
  category: "Intern Diaries",
  views: "",
  tags: ["Data Science", "Deep Learning", "NLP", "Internship"]
},
    {
  id: 4,
  title: "Third-year Internship by Akash Palaniswamy at University of Alberta, Department of Electrical and Computer Engineering",
  excerpt: "Akash Palaniswamy shares his research internship experience at the University of Alberta, working on numerical simulations of energy systems and implementing control algorithms on FPGAs and GPUs.",
  author: "Akash Palaniswamy",
  date: "2024-12-30",
  
  category: "Intern Diaries",
  views: "",
  tags: ["Research Internship", "Energy Systems", "FPGA", "Renewable Energy"]
},
    {
  id: 5,
  title: "Second Year Internship Experience by Shreyas Kulkani at Ernst & Young (EY)",
  excerpt: "Shreyas Kulkani shares his ESG & Sustainability consulting internship experience at Ernst & Young, gaining exposure to sustainability frameworks and client projects across diverse sectors.",
  author: "Shreyas Kulkani",
  date: "2024-12-30",
  
  category: "Intern Diaries",
  views: "",
  tags: ["ESG", "Sustainability", "Consulting", "Internship"]
},{
  id: 6,
  title: "Second Year Summer Internship by Shaunak Joshi at DRDO, Pune",
  excerpt: "Shaunak Joshi shares his research internship experience at DRDO Pune, working on energy systems in humanoid robots and writing a survey paper presented at a conference.",
  author: "Shaunak Joshi",
  date: "2020-08-04",
  readTime: "3 min read",
  category: "Intern Diaries",
  views: "",
  tags: ["Energy Systems", "Research", "DRDO", "Internship"]
}

  ];

  return (
    <div className="min-h-screen relative">
      <GridBackground />
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="team-header text-center">
            <h1
              className="text-5xl md:text-7xl font-black mb-6 glitch-text text-glow"
              data-text="BLOG"
            >
              BLOG
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              <span className="text-primary font-bold">
                Stay Updated: The Latest Insights, Research, and Stories from DESE.
                <br />
              </span>
            </p>
          </div>
          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 perspective-[1500px]">
            {blogPosts.map((post) => (
              <TiltCard key={post.id}>
                <Card className="shine-card flex flex-col bg-card/50 border-primary/30 hover:border-primary/50 transition-all duration-300 shadow-xl">
                  <div className="shine-overlay"></div>
                  <CardHeader className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Eye className="h-3 w-3 mr-1" />
                        {post.views}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-primary group-hover:text-glow transition-all line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-primary/30 text-primary text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                   
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

/* 🔥 Smooth 3D Tilt Card Component */
function TiltCard({ children }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;

    const rotateX = ((y / card.height) - 0.5) * 25; // smoother tilt
    const rotateY = ((x / card.width) - 0.5) * 25;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="w-full h-full"
      style={{ transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

export default Blog;
