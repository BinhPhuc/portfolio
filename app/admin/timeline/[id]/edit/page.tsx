import { TimelineForm } from "@/components/admin/timeline-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
<<<<<<< HEAD
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import React from "react";

export default async function EditTimelinePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const timeline = await prisma.timeline.findUnique({
    where: { id },
  });
=======
import { notFound } from "next/navigation";
import React from "react";

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
  },
];

export default function EditTimelinePage({
  params,
}: {
  params: { id: string };
}) {
  const timeline = MOCK_TIMELINES.find((t) => t.id === params.id);
>>>>>>> 9fd907040beb710066b15e036886308ab83f2ec8

  if (!timeline) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin/timeline">Timeline</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
<<<<<<< HEAD
                <BreadcrumbPage>Edit Timeline</BreadcrumbPage>
=======
                <BreadcrumbPage>Chỉnh sửa</BreadcrumbPage>
>>>>>>> 9fd907040beb710066b15e036886308ab83f2ec8
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mb-8">
<<<<<<< HEAD
            <h1 className="text-3xl font-bold mb-2">
              Edit Timeline Entry
            </h1>
            <p className="text-muted-foreground">Update timeline information</p>
          </div>

          <TimelineForm
            initialData={{
              ...timeline,
              type: timeline.type as "work" | "education",
            }}
            id={timeline.id}
          />
=======
            <h1 className="text-3xl font-bold mb-2">Chỉnh sửa Timeline Entry</h1>
            <p className="text-muted-foreground">Cập nhật thông tin timeline</p>
          </div>

          <TimelineForm initialData={timeline} />
>>>>>>> 9fd907040beb710066b15e036886308ab83f2ec8
        </div>
      </div>
    </div>
  );
}
