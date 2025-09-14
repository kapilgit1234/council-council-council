import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Eye, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import GridBackground from "@/components/background/GridBackground";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "BREAKTHROUGH IN QUANTUM BATTERY TECHNOLOGY",
    excerpt: "Our research team has achieved a 400% improvement in energy density using quantum entanglement principles, revolutionizing portable energy storage for the next decade.",
    author: "Dr. Elena Rodriguez",
    date: "2024-02-28",
    readTime: "8 min read",
    category: "Research",
    views: 1247,
    featured: true,
    tags: ["Quantum Physics", "Battery Tech", "Innovation"]
  };

  const blogPosts = [
    {
      id: 2,
      title: "AI-POWERED SMART GRID OPTIMIZATION",
      excerpt: "Machine learning algorithms are transforming how we manage electrical grids, enabling 35% better efficiency and reducing carbon emissions.",
      author: "Dr. Aisha Patel",
      date: "2024-02-25",
      readTime: "6 min read", 
      category: "Technology",
      views: 892,
      tags: ["Artificial Intelligence", "Smart Grid", "Sustainability"]
    },
    {
      id: 3,
      title: "FUSION ENERGY: THE DAWN OF UNLIMITED POWER",
      excerpt: "Recent advances in fusion reactor design bring us closer to commercial fusion power, with plasma temperatures reaching record highs.",
      author: "Prof. Michael Torres",
      date: "2024-02-22",
      readTime: "10 min read",
      category: "Research", 
      views: 1156,
      tags: ["Fusion Energy", "Nuclear Physics", "Clean Energy"]
    },
    {
      id: 4,
      title: "SUSTAINABLE MATERIALS FOR SOLAR PANELS",
      excerpt: "Exploring eco-friendly alternatives to traditional silicon-based solar cells using organic photovoltaic materials.",
      author: "Dr. Sarah Kim",
      date: "2024-02-20",
      readTime: "5 min read",
      category: "Sustainability",
      views: 743,
      tags: ["Solar Energy", "Materials Science", "Sustainability"]
    },
    {
      id: 5,
      title: "GEOTHERMAL ENERGY IN URBAN ENVIRONMENTS",
      excerpt: "How cities can harness geothermal energy for heating and cooling systems, reducing urban carbon footprints by 40%.",
      author: "Dr. Robert Johnson",
      date: "2024-02-18",
      readTime: "7 min read",
      category: "Urban Planning",
      views: 634,
      tags: ["Geothermal", "Urban Design", "Climate Change"]
    },
    {
      id: 6,
      title: "HYDROGEN FUEL CELL VEHICLES: MARKET ANALYSIS",
      excerpt: "Comprehensive analysis of the hydrogen vehicle market, infrastructure challenges, and investment opportunities.",
      author: "Prof. James Chen",
      date: "2024-02-15",
      readTime: "9 min read",
      category: "Market Analysis",
      views: 567,
      tags: ["Hydrogen", "Transportation", "Market Trends"]
    },
    {
      id: 7,
      title: "ENERGY STORAGE: BEYOND LITHIUM-ION",
      excerpt: "Exploring next-generation battery technologies including solid-state, sodium-ion, and flow batteries for grid-scale storage.",
      author: "Maria Gonzalez",
      date: "2024-02-12",
      readTime: "6 min read",
      category: "Technology",
      views: 823,
      tags: ["Energy Storage", "Battery Technology", "Grid Storage"]
    },
    {
      id: 8,
      title: "CARBON CAPTURE: SCALING FOR IMPACT",
      excerpt: "Direct air capture technologies are maturing rapidly, with costs dropping 60% over the past three years.",
      author: "Dr. Lisa Wang",
      date: "2024-02-10",
      readTime: "8 min read",
      category: "Climate Technology",
      views: 945,
      tags: ["Carbon Capture", "Climate Change", "Environmental Tech"]
    }
  ];

  const categories = [
    { name: "All", count: 8, active: true },
    { name: "Research", count: 3, active: false },
    { name: "Technology", count: 2, active: false },
    { name: "Sustainability", count: 2, active: false },
    { name: "Market Analysis", count: 1, active: false }
  ];

  return (
    <div className="min-h-screen relative">
      <GridBackground />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 glitch-text text-glow" data-text="RESEARCH BLOG">
              RESEARCH BLOG
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              LATEST INSIGHTS FROM OUR ENERGY SCIENCE RESEARCH
              <br />
              <span className="text-primary font-bold">DISCOVERIES THAT SHAPE THE FUTURE</span>
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="holographic hover:pulse-glow transition-all duration-300 group overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-6 left-6">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    FEATURED
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-primary/50 text-primary text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-glow transition-all">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/80 text-lg mb-4 line-clamp-2">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-white/70 text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {featuredPost.views}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mb-8">
                {categories.map((category) => (
                  <Button 
                    key={category.name}
                    variant={category.active ? "default" : "outline"}
                    size="sm"
                    className={category.active 
                      ? "bg-primary text-primary-foreground pulse-glow" 
                      : "border-primary/30 text-primary hover:bg-primary/10"
                    }
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
                    <CardHeader>
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
                      <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="border-primary/30 text-primary text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
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

                      <Link to={`/blog/${post.id}`}>
                        <Button size="sm" className="w-full bg-primary/80 hover:bg-primary text-primary-foreground font-semibold group">
                          READ MORE
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                  LOAD MORE POSTS
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Newsletter Signup */}
              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">STAY UPDATED</CardTitle>
                  <CardDescription>
                    Get the latest research insights delivered to your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 bg-input border border-primary/30 rounded-md text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none text-sm"
                    />
                    <Button size="sm" className="w-full bg-primary text-primary-foreground pulse-glow">
                      SUBSCRIBE
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">POPULAR POSTS</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="border-b border-primary/10 pb-3 last:border-b-0">
                        <h4 className="text-sm font-semibold text-primary line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Eye className="h-3 w-3 mr-1" />
                          {post.views} views
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Research Areas */}
              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">RESEARCH AREAS</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["Quantum Energy", "AI & ML", "Fusion Technology", "Solar Innovation", "Battery Tech", "Smart Grids"].map((area) => (
                      <div key={area} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                        → {area}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">RESEARCH IMPACT</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Publications</span>
                      <span className="text-primary font-bold">150+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Citations</span>
                      <span className="text-primary font-bold">2.5K+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Patents</span>
                      <span className="text-primary font-bold">45+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Collaborations</span>
                      <span className="text-primary font-bold">30+</span>
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

export default Blog;