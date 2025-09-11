import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  MapPin,
  Award,
  Code,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  Instagram,
  Facebook,
  ExternalLink,
} from "lucide-react";
import { HeroSection } from "@/app/about/hero-section";
import { AnimatedSection } from "@/app/about/animated-section";

const timelineData = [
  {
    startYear: "Feb 2025",
    endYear: "Present",
    title: "Intelligent Software Engineering",
    company: "UET - VNU",
    location: "Hanoi, Vietnam",
    type: "work",
    description: "Competitive Programming, Algorithms and Datastructures, C++",
    achievements: ["Questin - Admission and Career Guidance Chatbot "],
    technologies: [],
  },
  {
    startYear: "Aug 2021",
    endYear: "May 2024",
    title: "High School for Gifted Students",
    company: "HUS - VNU",
    location: "Hanoi, Vietnam",
    type: "work",
    description: "Competitive Programming, Algorithms and Datastructures, C++",
    achievements: [
      "GPA: 9.5/10 (Grade 12)",
      "Informatics Team Member",
      "Third Prize, VNU Excellent Student Contest",
      "Bronze Medal, HSGSO (Informatics)",
    ],
    technologies: [],
  },
];

const personalProjects = [
  {
    title: "Questin - AI Career Guidance Chatbot",
    description:
      "A chatbot developed for the VNU University of Engineering and Technology to support admission counseling and post-graduation guidance. The system leverages Agentic RAG for improved response accuracy. Contributed to UI/UX design, backend development with FastAPI, and the design of conversation flows to deliver reliable and precise answers to users.",
    technologies: [
      "TypeScript",
      "React (UI/UX)",
      "Machine Learning",
      "FastAPI",
      "Redis",
      "ELK Stack",
      "MinIO",
      "Agentic RAG",
      "LangChain",
      "MySQL",
    ],
    status: "In Development",
    category: "AI/ML",
    highlights: [
      "Designed and developed a chatbot to support university admission counseling and post-graduation guidance.",
      "Integration with university admission data",
      "Implemented Agentic RAG approach to improve accuracy and relevance of responses.",
      "Contributed to UI/UX design to enhance user experience and accessibility.",
      "Built and maintained backend services with FastAPI for scalable and efficient performance.",
      "Collaborated on conversation flow design to deliver precise and reliable answers to users.",
    ],
    githubUrl: "https://github.com/BinhPhuc",
    liveUrl: "https://questin.iselab.info/",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and TypeScript, featuring dark mode, smooth animations, and optimized performance.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    status: "Completed",
    category: "Web Development",
    highlights: [
      "Server-side rendering for optimal SEO",
      "Responsive design with mobile-first approach",
      "Dark/light theme toggle",
      "Smooth page transitions and animations",
    ],
    githubUrl: "https://github.com/BinhPhuc/portfolio",
    liveUrl: "#",
  },
];

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: [
      "Java Spring Boot",
      "Node.js",
      "Express",
      "NestJS",
      "Python",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "Vercel"],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-foreground">
              Portfolio
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link href="/about" className="text-foreground font-medium">
                About
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back To Home
            </Link>
          </Button>

          <HeroSection />

          <AnimatedSection className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      {skillGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Personal Projects
            </h2>
            <div className="grid gap-6">
              {personalProjects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <CardTitle className="mb-2">{project.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="outline">{project.category}</Badge>
                          <Badge variant="outline">{project.status}</Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {project.githubUrl !== "#" && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={project.githubUrl} target="_blank">
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        {project.liveUrl !== "#" && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={project.liveUrl} target="_blank">
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Key Highlights</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {project.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-16">
            <h2 className="text-2xl font-bold mb-12 text-center">
              Education & Experience
            </h2>
            <div className="relative pl-8 md:pl-relative max-w-3xl mx-auto">
              <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border transform -translate-x-1/2"></div>

              <div className="space-y-12">
                {timelineData.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                    <div
                      className={`ml-12 md:ml-0 md:w-[calc(50%-32px)] ${
                        index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <Card>
                        <CardHeader>
                          <div className="flex flex-col gap-2">
                            <CardTitle className="flex items-center gap-2">
                              {item.type === "work" ? (
                                <Briefcase className="h-5 w-5" />
                              ) : (
                                <Award className="h-5 w-5" />
                              )}
                              {item.title}
                            </CardTitle>
                            <div className="flex flex-col sm:flex-row items-start gap-2 text-sm text-muted-foreground">
                              <span className="font-medium">
                                {item.company}
                              </span>
                              <span className="hidden sm:inline">•</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {item.location}
                              </span>
                            </div>
                            <Badge variant="outline" className="w-fit">
                              {item.startYear} - {item.endYear}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            {item.description}
                          </p>

                          <div className="mb-4">
                            <h4 className="font-medium mb-2">Achievements</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {item.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">
                              {item.technologies.length > 0
                                ? "Technologies:"
                                : ""}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-16 text-center">
            <Card className="p-8">
              <h3 className="text-2xl font-bold">Connect With Me</h3>

              <p className="text-muted-foreground">
                I'm always open to discussing interesting projects and new
                collaboration opportunities.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://www.facebook.com/binh.phuc.737448"
                    target="_blank"
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://www.instagram.com/binhpphuc/"
                    target="_blank"
                  >
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/BinhPhuc" target="_blank">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://www.linkedin.com/in/b%C3%ACnh-ph%E1%BA%A1m-361708326/"
                    target="_blank"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:pham.phuc.binh.271106@gmail.com">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/blog">Read My Blog</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="mailto:hello@example.com">Contact Me</Link>
                </Button>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
