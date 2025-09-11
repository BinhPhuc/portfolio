import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Award, Code, Briefcase } from "lucide-react";

const timelineData = [
  {
    startYear: "Feb 2025",
    endYear: "Present",
    title: "ISE Lab",
    company: "UET - VNU",
    location: "Hanoi, Vietnam",
    type: "work",
    description: "Competitive Programming, Algorithms and Datastructures, C++",
    achievements: [
      "Questin - Admission and Career Guidance Chatbot "
    ],
    technologies: [],
  },
  {
    startYear: "Aug 2021",
    endYear: "May 2024",
    title: "HUS High School for Gifted Students",
    company: "HUS - VNU",
    location: "Hanoi, Vietnam",
    type: "work",
    description: "Competitive Programming, Algorithms and Datastructures, C++",
    achievements: [
      "GPA: 9.5/10 (Grade 12)",
      "Informatics Team Member",
      "Third Prize, VNU Excellent Student Contest in Informatics",
      "Bronze Medal, HSGSO (Informatics)",
    ],
    technologies: [],
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
              Back to Home
            </Link>
          </Button>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              The journey of a passionate developer who loves technology and
              never stops learning
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
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
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-12 text-center">
              Education & Experience
            </h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                    <div className="md:ml-16">
                      <Card>
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <CardTitle className="flex items-center gap-2">
                              {item.type === "work" ? (
                                <Briefcase className="h-5 w-5" />
                              ) : (
                                <Award className="h-5 w-5" />
                              )}
                              {item.title}
                            </CardTitle>
                            <Badge variant="outline">
                              {item.startYear} - {item.endYear}
                            </Badge>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                            <span className="font-medium">{item.company}</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {item.location}
                            </span>
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
          </section>

          <section className="mt-16 text-center">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing interesting projects and new
                collaboration opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/blog">Read My Blog</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="mailto:hello@example.com">Contact Me</Link>
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
