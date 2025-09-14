import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, FileText, Video, BookOpen, ExternalLink, Search, Star, Clock, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import GridBackground from "@/components/background/GridBackground";

const Resources = () => {
  const featuredResources = [
    {
      id: 1,
      title: "COMPREHENSIVE GUIDE TO QUANTUM ENERGY SYSTEMS",
      description: "500-page handbook covering theoretical foundations and practical applications of quantum mechanics in energy generation and storage.",
      type: "PDF",
      category: "Research Guide",
      pages: 500,
      downloads: 2847,
      rating: 4.9,
      featured: true,
      author: "Dr. Elena Rodriguez",
      publishDate: "2024-01-15",
      fileSize: "45 MB"
    },
    {
      id: 2,
      title: "AI-POWERED SMART GRID OPTIMIZATION TOOLKIT",
      description: "Complete machine learning framework and datasets for implementing intelligent grid management systems.",
      type: "Code Package",
      category: "Software Tools",
      downloads: 1923,
      rating: 4.8,
      featured: true,
      author: "Dr. Aisha Patel",
      publishDate: "2024-02-01",
      fileSize: "125 MB"
    }
  ];

  const resources = [
    {
      id: 3,
      title: "Fusion Reactor Design Principles",
      description: "Detailed engineering specifications and design methodologies for next-generation fusion reactors.",
      type: "PDF",
      category: "Technical Manual",
      pages: 340,
      downloads: 1567,
      rating: 4.7,
      author: "Prof. Michael Torres",
      publishDate: "2024-01-20",
      fileSize: "28 MB"
    },
    {
      id: 4,
      title: "Battery Technology Course Materials",
      description: "Complete course package including lectures, assignments, and laboratory procedures for advanced battery science.",
      type: "Course Package",
      category: "Educational",
      pages: 200,
      downloads: 3421,
      rating: 4.6,
      author: "Dr. Sarah Kim",
      publishDate: "2023-12-10",
      fileSize: "89 MB"
    },
    {
      id: 5,
      title: "Renewable Energy Market Analysis 2024",
      description: "Comprehensive market report analyzing trends, investments, and opportunities in renewable energy sectors.",
      type: "PDF",
      category: "Market Report",
      pages: 150,
      downloads: 892,
      rating: 4.5,
      author: "Energy Economics Team",
      publishDate: "2024-02-10",
      fileSize: "15 MB"
    },
    {
      id: 6,
      title: "Geothermal Systems Installation Guide",
      description: "Step-by-step guide for designing and installing geothermal heating and cooling systems.",
      type: "PDF",
      category: "Installation Guide",
      pages: 120,
      downloads: 734,
      rating: 4.4,
      author: "Dr. Robert Johnson",
      publishDate: "2024-01-30",
      fileSize: "22 MB"
    },
    {
      id: 7,
      title: "Carbon Capture Technology Webinar Series",
      description: "12-hour video series covering latest developments in carbon capture, utilization, and storage technologies.",
      type: "Video Series",
      category: "Educational",
      duration: "12 hours",
      downloads: 1245,
      rating: 4.8,
      author: "Climate Tech Research Group",
      publishDate: "2024-02-05",
      fileSize: "2.1 GB"
    },
    {
      id: 8,
      title: "Hydrogen Fuel Cell Simulation Software",
      description: "Advanced simulation toolkit for modeling hydrogen fuel cell performance and optimization.",
      type: "Software",
      category: "Simulation Tools",
      downloads: 567,
      rating: 4.3,
      author: "Computational Energy Lab",
      publishDate: "2024-01-25",
      fileSize: "156 MB"
    }
  ];

  const courseReviews = [
    {
      id: 1,
      courseCode: "ES-501",
      courseName: "Advanced Energy Systems",
      instructor: "Dr. Elena Rodriguez",
      rating: 4.8,
      reviewCount: 45,
      difficulty: "Advanced",
      workload: "Heavy",
      highlights: ["Cutting-edge research", "Excellent lab facilities", "Industry connections"]
    },
    {
      id: 2,
      courseCode: "ES-420",
      courseName: "Renewable Energy Technologies",
      instructor: "Prof. James Chen",
      rating: 4.6,
      reviewCount: 67,
      difficulty: "Intermediate",
      workload: "Moderate",
      highlights: ["Practical applications", "Field trips", "Guest lectures"]
    },
    {
      id: 3,
      courseCode: "ES-350",
      courseName: "Energy Storage Systems",
      instructor: "Dr. Sarah Kim",
      rating: 4.7,
      reviewCount: 38,
      difficulty: "Intermediate",
      workload: "Moderate",
      highlights: ["Hands-on experiments", "Latest technology", "Industry projects"]
    },
    {
      id: 4,
      courseCode: "ES-602",
      courseName: "Fusion Energy Physics",
      instructor: "Prof. Michael Torres",
      rating: 4.9,
      reviewCount: 23,
      difficulty: "Advanced",
      workload: "Heavy",
      highlights: ["World-class research", "ITER collaboration", "PhD opportunities"]
    }
  ];

  const categories = [
    { name: "All Resources", count: 8, active: true },
    { name: "Research Guides", count: 2, active: false },
    { name: "Software Tools", count: 2, active: false },
    { name: "Course Materials", count: 2, active: false },
    { name: "Market Reports", count: 1, active: false },
    { name: "Installation Guides", count: 1, active: false }
  ];

  return (
    <div className="min-h-screen relative">
      <GridBackground />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 glitch-text text-glow" data-text="RESOURCES">
              RESOURCES
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ACCESS OUR COMPREHENSIVE COLLECTION OF RESEARCH MATERIALS
              <br />
              <span className="text-primary font-bold">KNOWLEDGE AT YOUR FINGERTIPS</span>
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <Card className="holographic">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-primary" />
                    <Input 
                      placeholder="Search resources, courses, guides..."
                      className="pl-10 border-primary/30 focus:border-primary bg-input/50"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="lg:w-48 border-primary/30 focus:border-primary bg-input/50">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="research">Research Guides</SelectItem>
                      <SelectItem value="software">Software Tools</SelectItem>
                      <SelectItem value="courses">Course Materials</SelectItem>
                      <SelectItem value="reports">Market Reports</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="lg:w-48 border-primary/30 focus:border-primary bg-input/50">
                      <SelectValue placeholder="File Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="pdf">PDF Documents</SelectItem>
                      <SelectItem value="video">Videos</SelectItem>
                      <SelectItem value="software">Software</SelectItem>
                      <SelectItem value="package">Course Packages</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Featured Resources */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">FEATURED RESOURCES</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredResources.map((resource) => (
                <Card key={resource.id} className="holographic hover:pulse-glow transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        FEATURED
                      </Badge>
                      <Badge variant="outline" className="border-accent text-accent">
                        {resource.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-glow transition-all">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Users className="h-4 w-4 mr-2 text-primary" />
                          {resource.author}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          {new Date(resource.publishDate).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Download className="h-4 w-4 mr-2 text-primary" />
                          {resource.downloads.toLocaleString()} downloads
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Star className="h-4 w-4 mr-2 text-primary fill-primary" />
                          {resource.rating}/5.0
                        </div>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        Size: {resource.fileSize}
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      <Download className="h-4 w-4 mr-2" />
                      DOWNLOAD RESOURCE
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Resources Grid */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-8">ALL RESOURCES</h2>
              
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

              <div className="space-y-4">
                {resources.map((resource) => (
                  <Card key={resource.id} className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-primary">{resource.title}</h3>
                            <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                              {resource.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                          
                          <div className="flex items-center gap-6 text-xs text-muted-foreground">
                            <div className="flex items-center">
                              <Users className="h-3 w-3 mr-1 text-primary" />
                              {resource.author}
                            </div>
                            <div className="flex items-center">
                              <Download className="h-3 w-3 mr-1 text-primary" />
                              {resource.downloads.toLocaleString()}
                            </div>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 mr-1 text-primary fill-primary" />
                              {resource.rating}
                            </div>
                            <div className="flex items-center">
                              <FileText className="h-3 w-3 mr-1 text-primary" />
                              {resource.fileSize}
                            </div>
                          </div>
                        </div>
                        
                        <Button size="sm" className="bg-primary/80 hover:bg-primary text-primary-foreground ml-4">
                          <Download className="h-4 w-4 mr-2" />
                          DOWNLOAD
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Reviews */}
              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    COURSE REVIEWS
                  </CardTitle>
                  <CardDescription>
                    Student reviews and ratings for our energy science courses.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courseReviews.map((course) => (
                      <div key={course.id} className="border-b border-primary/10 pb-4 last:border-b-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-primary text-sm">{course.courseCode}</h4>
                            <p className="text-xs text-muted-foreground line-clamp-1">{course.courseName}</p>
                          </div>
                          <div className="flex items-center text-xs">
                            <Star className="h-3 w-3 text-primary fill-primary mr-1" />
                            {course.rating}
                          </div>
                        </div>
                        
                        <p className="text-xs text-muted-foreground mb-2">Prof. {course.instructor}</p>
                        
                        <div className="flex gap-2 mb-2">
                          <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                            {course.difficulty}
                          </Badge>
                          <Badge variant="outline" className="text-xs border-accent/30 text-accent">
                            {course.workload}
                          </Badge>
                        </div>
                        
                        <div className="text-xs text-muted-foreground">
                          {course.reviewCount} reviews
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button size="sm" variant="outline" className="w-full mt-4 border-primary/30 text-primary hover:bg-primary/10">
                    VIEW ALL REVIEWS
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">RESOURCE STATS</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total Resources</span>
                      <span className="text-primary font-bold">250+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Downloads</span>
                      <span className="text-primary font-bold">15K+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Courses</span>
                      <span className="text-primary font-bold">45+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Research Papers</span>
                      <span className="text-primary font-bold">180+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">QUICK ACCESS</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <a href="#" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Research Database
                    </a>
                    <a href="#" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Course Catalog
                    </a>
                    <a href="#" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Digital Library
                    </a>
                    <a href="#" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Simulation Tools
                    </a>
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

export default Resources;