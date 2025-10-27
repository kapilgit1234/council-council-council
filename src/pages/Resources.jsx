import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Star, Search } from "lucide-react";
import Header from "@/components/layout/Header";
import GridBackground from "@/components/background/GridBackground";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const courseReviews = [
    {
      id: 1,
      courseName: "MM 225 - AI and Data Science",
      instructor: "Prof. M.P. Gururajan, Prof. Hina Gokhale",
      semester: "Autumn 2024-25",
      difficulty: "3.0",
      prerequisite: "No hard pre-requisite, but if you are strong with the JEE probability (and PnC) then the theory portion of the course will be scoring. Also a background in python is kind of expected (at least the professor expects), helps in tackling the lab sessions.",
      teachingStyle: "Research-driven, interactive lectures, lab projects",
      evaluation: "Assignments (30%), Midterm (30%), Final Project (40%)",
      feedback: "Exams are challenging but fair, emphasize conceptual clarity",
      advice: "Stay updated with current research papers, collaborate in groups",
      rating: "NA",
    },
    {
      id: 2,
            courseName: "EN 226 -Energy Conversion Lab",
      instructor: "Prof. Sandeep Kumar",
      semester: "Spring 2024-25",
      difficulty: "2.5",
      prerequisite: "No hard prerequisite, though theory from EN220 and EN222 helps.",
      teachingStyle: "First few lab sessions were theory lectures, rest hands-on lab experiments; slides and class notes provided.",
      evaluation: "Labs (50%), Endsemester Exam (50%)",
      feedback: "Lab experiments mostly reading and calculations; thorough conceptual understanding needed; report writing time-consuming.",
      advice: "Be conceptually clear on all experiments; practice report writing; good exposure to multiple domains-circuital, chemical, fluid, heat.",
      rating: "NA"

    },
    {
      id: 3,
     courseName: "EN 224 - Electrical Networks and Machines Lab",
      instructor: "Prof. Ravi Prakash Reddy, Prof. D. Venkatraman",
      semester: "Spring 2024-25",
      difficulty: "2.0",
      prerequisite: "EN213 - Electrical Networks and Machines",
      teachingStyle: "Intro class by professors; rest conducted by TAs. Hands-on experiments in groups of 3; emphasis on using oscilloscope and mastering machines experiments",
      evaluation: "Lab portion (60%), Endsemester Exam (40%)",
      feedback: "Endsem similar to lab experiments; hands-on practice critical. TAs helpful; be proactive in asking doubts",
      advice: "Get hands-on experience with machines and circuits; don’t just rely on theory",
      rating: "NA"

    },
    {
      id: 4,
      courseName: "DE 250-Design Thinking for Innovation",
      instructor: "Prof. Nishant Sharma (main), DE250 TAs",
      semester: "Spring 2024-25",
      difficulty: "1.0",
      prerequisite: "none",
      teachingStyle: "Video modules on Moodle with in-studio labs; group work emphasized; tutors provide guidance",
      evaluation: "In-video questions (5%), Attendance (10%), Individual work (10%), In-studio quizzes (30%), Group work (30%), Endsem exhibition (15%)",
      feedback: "Labs manageable, group collaboration key; endsem exhibition assessed by tutor, professor, and external examiner; rank-based grading",
      advice: "Good for someone interested in design and collaborative projects; be prepared to explain your prototype in detail",
      rating: "NA"

    },
    {id : 5,
      courseName: "EN 313 - Power Electronics",
      instructor: "Prof. Suryanarayana Doolla (1st half), Prof. Ravi Prakash Reddy (2nd half)",
      semester: "Spring 2024-25 / Spring 2025",
      difficulty: "3.5",
      prerequisite: "No hard prerequisite for first half; EN313 recommended for second half",
      teachingStyle: "Board and slides teaching; active in-class explanations; some assignments; simulation tools like PLECS/MATLAB used",
      evaluation: "Quiz (20%) + Midsem (30%) + Assignment (10%) + Endsem (40%) (first half), 10% Assignment + 20% Midsem + 5% Endsem (second half)",
      feedback: "Assignments and simulations required dedication; exams were conceptual and sometimes tricky; previous year questions helped; first half lenient, second half more difficult",
      advice: "Good course for electronics enthusiasts; pay attention in class, practice PYQs, and clarify doubts promptly",
      rating: "NA"

    },
    {
      id: 6,
      courseName: "EN 220 - Reactions for Energy",
      instructor: "Prof. Ashish Sarangi (Chemical Reactors), Prof. Manoj Neergat (Electrochemistry)",
      semester: "Spring 2024-25",
      difficulty: "2.5",
      prerequisite: "No formal pre-requisite; strong grasp of thermochemistry, chemical equilibrium, and chemical kinetics recommended",
      teachingStyle: "Board teaching with some slides; proactive in-class problem-solving; regular assignments and tutorials",
      evaluation: "Attendance & Participation (5%), Assignments (20%), Quiz 1 (12%), Midsem (15%), Quiz 2 (12%), Endsem (36%)",
      feedback: "Assignments engaging and fun; exams scoring and leniently evaluated; GASEQ software used in group assignments",
      advice: "Ideal for students interested in fuel chemistry, IC engines, or chemical engineering; provides foundation for advanced courses",
      rating: "NA"

    },
    {
      id: 7,
      courseName: "EN 222 - Fluid Mechanics and Heat Transfer",
      instructor: "Prof. Manaswita Bose",
      semester: "Spring 2024-25",
      difficulty: "3.5",
      prerequisite: "No pre-requisite; basic understanding of fluids and heat transfer from JEE helpful",
      teachingStyle: "Board and slides teaching; lab equipment used for visualization; graded tutorials and 'submit-a-question' assignments",
      evaluation: "Midsem (25%), Endsem (35%), 2 Quizzes (20%), Graded Tutorials (10%), Submit-a-question (10%), Attendance-based bonus",
      feedback: "Plenty of practice problems, PYQs discussed; exams moderate in difficulty and leniently checked",
      advice: "Recommended for students interested in fluid dynamics, heat transfer, or CFD; numerically intensive course, so genuine interest required",
      rating: "NA"


    },
    {
      id: 8,
      courseName: "EN 204 - Material Science for Energy Applications",
      instructor: "Bala Sir / Balasubramaniam Kavaipatti",
      semester: "Autumn 2024",
      difficulty: "3.0",
      prerequisite: "MA110 (Linear Algebra) recommended; Crystal Structures brush-up from JEE helpful",
      teachingStyle: "Mix of slides and live examples; surprise quizzes and graded assignments; class notes essential",
      evaluation: "Quizzes (26%), Tutorials & Assignments (14%), Midsem (20-25%), Endsem (35-40%), Additional quizzes/assignments (24%)",
      feedback: "Assignments a mix of easy and challenging; exams conceptual and application-based; lenient grading overall",
      advice: "Good for students interested in material science and linear algebra applications; attempt as many quizzes/assignments as possible; class participation important",
      rating: "NA"



    },
    {
  id: 9,
  courseName: "EN203 - Thermodynamics and Energy Conversion",
  instructor: "Prof. Lalit Kumar",
  semester: "Autumn 2024",
  difficulty: "2.5",
  prerequisite: "No hard pre-requisite. A headstart if your thermodynamics concepts from JEE are intact.",
  teachingStyle: "Relaxed teaching, uses board; no surprise quizzes; 2–3 graded assignments; enthusiastic in doubt clearing.",
  evaluation: "2 quizzes (10%), 2–3 graded assignments (10%), Midsem (25%), Endsem (50%), Attendance bonus (up to 5%)",
  feedback: "Assignments/tutorials provide ample relevant problems; exams lenient, questions from textbook and tutorials.",
  advice: "Important for anyone in chemical field; core course for Energy sophomores; thermodynamics essential for heat transfer, fuel chemistry, engines.",
  rating: "NA"
}
,
{
  id: 10,
  courseName: "EC101 - Economics",
  instructor: "Prof. Tara Shankar Shaw (first half), Prof. Aditi Chaubal (second half)",
  semester: "Autumn 2024",
  difficulty: "3.0",
  prerequisite: "Absolutely None",
  teachingStyle: "First half (microeconomics) taught via blackboard, math intensive; second half (macroeconomics) taught via slides, more theory-based; class notes essential.",
  evaluation: "Micro Economics – 20% Quiz, 30% Midsem; Macro Economics – 10% Quiz, 40% Endsem",
  feedback: "First half math-intensive and challenging; second half theory-based, easier; grading absolute. No assignments or projects, only sample problems for practice.",
  advice: "Great starter course to learn economics; pay attention to class notes, especially for microeconomics; course relatively easier compared to other energy core courses.",
  rating: "NA"
},
{
  id: 11,
  courseName: "EN213 - Electrical Networks and Machines",
  instructor: "Prof. SuryaNarayanan Doola & Prof. Ravi Prakash Reddy",
  semester: "Autumn 2024",
  difficulty: "3.5",
  prerequisite: "Basic JEE knowledge of circuitry recommended for 1st half; prof covers basics well.",
  teachingStyle: "Active board-based teaching for both halves; no surprise quizzes; 1 assignment in 2nd half; attendance bonus marks in 2nd half.",
  evaluation: "1 quiz (20%) + Assignment (10%) + Midsem (30%) + Endsem (40%)",
  feedback: "Practice problems and assignment helpful for preparation; midsem relatively easy, endsem moderately difficult; grading lenient in 1st half, challenging in 2nd half.",
  advice: "Strongly recommended for those interested in electrical domain and machinery; score maximum in early quizzes to boost grade; foundational for advanced electric machinery courses.",
  rating: "NA"
}
,{
  id: 12,
  courseName: "DE250 - Design Thinking",
  instructor: "Prof. Nishant Sharma (course in-charge, mostly work with TAs)",
  semester: "Spring 2023",
  difficulty: "1",
  prerequisite: "None",
  teachingStyle: "Very interactive and hands-on; labs essential; team-based projects; work closely with TAs; creativity and engagement highly encouraged.",
  evaluation: "Embedded quiz 20%, Weekly studio/labs 55%, Exhibition 20%, Elevator pitch 5%; labs and final presentation have most weight.",
  feedback: "Fun and engaging; labs crucial for scoring; team work emphasized; grading lenient if team performs well; creativity and participation matter.",
  advice: "Show interest in activities, work well in a team, be creative; attending labs and engaging with TAs makes the course very easy and enjoyable.",
  rating: "NA"
}
,{
  id: 13,
  courseName: "EN226 - Energy Conversion Lab",
  instructor: "Prof. Sandeep Kumar",
  semester: "Spring 2024",
  difficulty: "2-3",
  prerequisite: "EN204 recommended",
  teachingStyle: "Hands-on lab-based course with scattered lab locations; brief theory classes; group experiments; pre and post viva essential; professor supportive and helpful.",
  evaluation: "Experiments 45-50% (including report, viva, conduction), Final viva 25-30%, Written exam 20-25%",
  feedback: "Lab experiments are interesting and manageable; preparation from manuals is sufficient; scattered labs require planning; professor helpful though emails may be slow; pre and post viva scores important.",
  advice: "Attend all labs, prepare for pre and post viva from manuals, understand theory before experiments, be on time, manage lab locations efficiently.",
  rating: "NA"
}
,{
  id: 14,
  courseName: "EN313 - Power Electronics",
  instructor: "Prof. Ravi Prakash Reddy",
  semester: "Spring 2024",
  difficulty: "4",
  prerequisite: "No hard prerequisite; basic knowledge of diodes and transistors recommended",
  teachingStyle: "Board-based lectures with handwritten notes provided; concepts emphasized over rigorous math; assignments are useful for concept clarity and exam preparation.",
  evaluation: "1 Quiz (20%) + Midsem (20%) + Assignments/Project (20%) + Endsem (40%)",
  feedback: "Lectures well-organized and helpful; exams open-note, questions concept-driven; assignments aid understanding; applying class discussions to exams is crucial.",
  advice: "Attend all classes, focus on concepts taught by the professor rather than reference book problems, use assignments for practice, exams are mostly concept-based and not formula-heavy.",
  rating: "NA"
}
,{
  id: 15,
  courseName: "EN220 - Reactions for Energy",
  instructor: "Asish Kumar Sarangi, Manoj Neergat",
  semester: "Spring 2023",
  difficulty: "3",
  prerequisite: "Knowledge of 12th standard thermodynamics recommended",
  teachingStyle: "Asish Sir: clear, student-friendly, paced lectures with examples; Manoj Sir: monotonous, less clarity in electrochemistry; overall mix of numerical and conceptual learning.",
  evaluation: "2 Assignments (15%) + 2 Quizzes & Tutorials (30%) + Midsem (15%) + Endsem (35%) + Attendance (5%)",
  feedback: "Concepts in class well explained for thermodynamics; electrochemistry part weaker. Exams easy to moderate numerically; endsem slightly tricky due to electrochemistry. Assignments help reinforce concepts.",
  advice: "Focus on Asish Sir’s lectures for conceptual clarity; practice numerical problems; pay attention to electrochemistry; maintain good attendance for marks.",
  rating: "NA"
}
,{
  id: 16,
  courseName: "EN207 - Data Analysis and Interpretation",
  instructor: "Dayadeep Monder",
  semester: "Sem 3 (Autumn 2020-2021)",
  difficulty: "3",
  prerequisite: "None",
  teachingStyle: "Flipped classroom mode with lectures uploaded online; weekly interaction sessions for tutorials; strong focus on R programming and implementation of theoretical concepts.",
  evaluation: "Weekly graded quizzes (timed) + 4 live coding tests in R + Endsem + Final viva; no midsem. Quizzes initially objective, later subjective with code submissions.",
  feedback: "Course serves as a good introduction to coding in R and statistics; open-book quizzes are slightly tricky; assignments help reinforce concepts. Regular interaction and material provided for better understanding.",
  advice: "Attend all live sessions; implement theoretical concepts in R; make notes carefully as exams are open-book and deceptive; revise tutorials thoroughly.",
  rating: "NA"
}
,{
  id: 17,
  courseName: "EN216 - Introduction to Renewable Energy",
  instructor: "Prof. Sagar Mitra",
  semester: "2.2 (Spring 2020-21)",
  difficulty: "2",
  prerequisite: "None",
  teachingStyle: "Lectures focus on concepts with calculations and formulas; surprise quizzes every alternate week; professor explains by writing on board; pace matters.",
  evaluation: "Quizzes (40%), Midsem (25%), Endsem (45%)",
  feedback: "Introductory yet deep course; requires practice with calculations and formulas; surprise quizzes reinforce learning; interesting for students curious about renewable energy.",
  advice: "Keep pace with lectures; solve assignments; maintain formula sheet for quick calculations; attend classes to make good notes for open-book exams.",
  rating: "NA"
}


    

  ];

  // Filter courses based on search term
  const filteredCourses = courseReviews.filter(
    (course) =>
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.semester.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen relative font-[Poppins] ">
      <GridBackground />
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1
              className="text-5xl md:text-7xl font-black mb-6 glitch-text text-glow"
              data-text="RESOURCES"
            >
              RESOURCES
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ACCESS OUR COMPREHENSIVE COLLECTION OF RESEARCH MATERIALS
              <br />
              <span className="text-primary font-bold">
                KNOWLEDGE AT YOUR FINGERTIPS
              </span>
            </p>
          </div>

          {/* Electives Button */}
          <div className="text-center mb-8">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3"
            >
              <a
                href="https://docs.google.com/spreadsheets/d/14pdSQ3ydlXCDWuHoXoUCwfNVs0K4Xq1efhdcXWcmC5g/edit?gid=0#gid=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Department Electives
              </a>
            </Button>
          </div>

          {/* Search Box */}
          <div className="max-w-md mx-auto mb-12 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-primary" />
            <Input
              type="text"
              placeholder="Search by course name, instructor, or semester..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-primary/30 focus:border-primary bg-input/50"
            />
          </div>

          {/* Course Reviews in Column Layout */}
          {filteredCourses.length > 0 ? (
            <div className="space-y-12">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="p-6 rounded-2xl border border-primary/30 bg-card/50 hover:border-primary/60 transition"
                >
                  {/* Title Row */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-2xl font-bold text-primary">
                      {course.courseName}
                    </h2>
                    <div className="flex items-center text-sm mt-2 md:mt-0">
                      <Star className="h-4 w-4 text-primary fill-primary mr-1" />
                      {course.rating}
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                    <div>
                      <p>
                        <span className="font-semibold text-foreground">
                          Instructor:
                        </span>{" "}
                        {course.instructor}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">
                          Semester Taken:
                        </span>{" "}
                        {course.semester}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">
                          Course Difficulty:
                        </span>{" "}
                        {course.difficulty}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">
                          Pre-requisite Knowledge:
                        </span>{" "}
                        {course.prerequisite}
                      </p>
                    </div>

                    <div>
                      <p>
                        <span className="font-semibold text-foreground">
                          Teaching Style:
                        </span>{" "}
                        {course.teachingStyle}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">
                          Evaluation Scheme:
                        </span>{" "}
                        {course.evaluation}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">
                          Feedback on Exams:
                        </span>{" "}
                        {course.feedback}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">
                          Advice:
                        </span>{" "}
                        {course.advice}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              No courses found matching your search.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Resources;
