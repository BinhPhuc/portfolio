import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
<<<<<<< HEAD
import {
  CirclePlus as PlusCircle,
  CreditCard as Edit,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function TimelineManagePage() {
  const timeLines = await prisma.timeline.findMany({
    orderBy: { priority: "asc" },
  });
=======
import { CirclePlus as PlusCircle, CreditCard as Edit, Briefcase, GraduationCap } from "lucide-react";

const MOCK_TIMELINES = [
  {
    id: "1",
    start_year: "2020",
    end_year: "2023",
    title: "Senior Software Engineer",
    company: "Tech Corp",
    location: "Ho Chi Minh City, Vietnam",
    type: "work" as const,
    description: "Led development of microservices architecture and mentored junior developers",
    achievements: [
      "Improved system performance by 40%",
      "Mentored 5 junior developers",
      "Implemented CI/CD pipeline"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    priority: 1,
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    start_year: "2018",
    end_year: "2020",
    title: "Full Stack Developer",
    company: "StartupHub",
    location: "Da Nang, Vietnam",
    type: "work" as const,
    description: "Built and maintained multiple client projects using modern web technologies",
    achievements: [
      "Delivered 15+ successful projects",
      "Reduced deployment time by 60%",
      "Implemented automated testing"
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
    priority: 2,
    createdAt: "2024-01-14T10:00:00Z",
    updatedAt: "2024-01-14T10:00:00Z",
  },
  {
    id: "3",
    start_year: "2014",
    end_year: "2018",
    title: "Bachelor of Computer Science",
    company: "University of Technology",
    location: "Ho Chi Minh City, Vietnam",
    type: "education" as const,
    description: "Focused on software engineering and data structures",
    achievements: [
      "GPA: 3.8/4.0",
      "Dean's List all semesters",
      "Led student tech club"
    ],
    technologies: ["Java", "Python", "C++", "SQL"],
    priority: 3,
    createdAt: "2024-01-13T10:00:00Z",
    updatedAt: "2024-01-13T10:00:00Z",
  },
  {
    id: "4",
    start_year: "2016",
    end_year: "2017",
    title: "Software Engineering Intern",
    company: "Digital Solutions",
    location: "Hanoi, Vietnam",
    type: "work" as const,
    description: "Assisted in developing web applications and learned industry best practices",
    achievements: [
      "Contributed to 3 major projects",
      "Learned Agile methodology",
      "Built internal tools"
    ],
    technologies: ["JavaScript", "PHP", "MongoDB", "Git"],
    priority: 4,
    createdAt: "2024-01-12T10:00:00Z",
    updatedAt: "2024-01-12T10:00:00Z",
  },
];

export default function TimelineManagePage() {
>>>>>>> 9fd907040beb710066b15e036886308ab83f2ec8
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Timeline</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center justify-between mb-8">
            <div>
<<<<<<< HEAD
              <h1 className="text-3xl font-bold mb-2">Timeline Management</h1>
=======
              <h1 className="text-3xl font-bold mb-2">Quản lý Timeline</h1>
              <p className="text-muted-foreground">
                Tổng cộng {MOCK_TIMELINES.length} timeline entries
              </p>
>>>>>>> 9fd907040beb710066b15e036886308ab83f2ec8
            </div>
            <Button asChild>
              <Link href="/admin/timeline/new">
                <PlusCircle className="mr-2 h-4 w-4" />
<<<<<<< HEAD
                Create New Timeline
=======
                Tạo Timeline mới
>>>>>>> 9fd907040beb710066b15e036886308ab83f2ec8
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<<<<<<< HEAD
            {timeLines.map((timeline, index) => (
=======
            {MOCK_TIMELINES.map((timeline, index) => (
>>>>>>> 9fd907040beb710066b15e036886308ab83f2ec8
              <Card
                key={timeline.id}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-in fade-in slide-in-from-bottom-4 flex flex-col"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
<<<<<<< HEAD
                    <CardTitle className="flex items-center gap-2">
                      {timeline.type === "work" ? (
                        <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <GraduationCap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      )}
                      <Badge
                        variant={
                          timeline.type === "work" ? "default" : "secondary"
                        }
                        className="text-xs"
                      >
                        {timeline.type === "work" ? "Work" : "Education"}
                      </Badge>
                    </CardTitle>
=======
                    {timeline.type === "work" ? (
                      <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    ) : (
                      <GraduationCap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    )}
                    <Badge
                      variant={timeline.type === "work" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {timeline.type === "work" ? "Công việc" : "Học vấn"}
                    </Badge>
>>>>>>> 9fd907040beb710066b15e036886308ab83f2ec8
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {timeline.title}
                  </CardTitle>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p className="font-medium">{timeline.company}</p>
                    <p className="text-xs">{timeline.location}</p>
<<<<<<< HEAD
                    <p className="text-xs">
                      {timeline.start_year} - {timeline.end_year}
                    </p>
=======
                    <p className="text-xs">{timeline.start_year} - {timeline.end_year}</p>
>>>>>>> 9fd907040beb710066b15e036886308ab83f2ec8
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {timeline.description}
                  </p>

                  <div className="space-y-3 flex-1">
<<<<<<< HEAD
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Achievements</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {timeline.achievements.length > 0 &&
                          timeline.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
=======
                    <div>
                      <h4 className="text-xs font-semibold mb-1.5">Thành tựu:</h4>
                      <ul className="space-y-1">
                        {timeline.achievements.slice(0, 3).map((achievement, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex gap-1.5">
                            <span className="text-primary mt-1">•</span>
                            <span className="line-clamp-1">{achievement}</span>
                          </li>
                        ))}
>>>>>>> 9fd907040beb710066b15e036886308ab83f2ec8
                      </ul>
                    </div>

                    <div>
<<<<<<< HEAD
                      <h4 className="font-medium mb-2">
                        {timeline.technologies.length > 0 ? "Technologies:" : ""}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {timeline.technologies.length > 0 &&
                          timeline.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
=======
                      <h4 className="text-xs font-semibold mb-1.5">Công nghệ:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {timeline.technologies.slice(0, 4).map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs px-2 py-0 h-5 group-hover:border-primary/50 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {timeline.technologies.length > 4 && (
                          <Badge
                            variant="outline"
                            className="text-xs px-2 py-0 h-5"
                          >
                            +{timeline.technologies.length - 4}
                          </Badge>
                        )}
>>>>>>> 9fd907040beb710066b15e036886308ab83f2ec8
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      Priority: {timeline.priority}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/admin/timeline/${timeline.id}/edit`}>
                        <Edit className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
