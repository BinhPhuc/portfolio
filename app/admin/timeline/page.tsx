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
import { PlusCircle, Edit, Briefcase, GraduationCap } from "lucide-react";

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
              <h1 className="text-3xl font-bold mb-2">Quản lý Timeline</h1>
              <p className="text-muted-foreground">
                Tổng cộng {MOCK_TIMELINES.length} timeline entries
              </p>
            </div>
            <Button asChild>
              <Link href="/admin/timeline/new">
                <PlusCircle className="mr-2 h-4 w-4" />
                Tạo Timeline mới
              </Link>
            </Button>
          </div>

          <div className="grid gap-6">
            {MOCK_TIMELINES.map((timeline, index) => (
              <Card
                key={timeline.id}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {timeline.type === "work" ? (
                          <Briefcase className="h-5 w-5 text-primary" />
                        ) : (
                          <GraduationCap className="h-5 w-5 text-primary" />
                        )}
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {timeline.title}
                        </CardTitle>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="font-medium">{timeline.company}</span>
                        <span>•</span>
                        <span>{timeline.location}</span>
                        <span>•</span>
                        <span>{timeline.start_year} - {timeline.end_year}</span>
                      </div>
                    </div>
                    <Badge
                      variant={timeline.type === "work" ? "default" : "secondary"}
                      className="ml-4"
                    >
                      {timeline.type === "work" ? "Công việc" : "Học vấn"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {timeline.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Thành tựu:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {timeline.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2">Công nghệ:</h4>
                      <div className="flex flex-wrap gap-2">
                        {timeline.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="group-hover:border-primary/50 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      Priority: {timeline.priority}
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/timeline/${timeline.id}/edit`}>
                        <Edit className="h-4 w-4 mr-2" />
                        Chỉnh sửa
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
