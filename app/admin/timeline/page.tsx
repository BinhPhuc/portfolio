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
              <h1 className="text-3xl font-bold mb-2">Timeline Management</h1>
            </div>
            <Button asChild>
              <Link href="/admin/timeline/new">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create New Timeline
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeLines.map((timeline, index) => (
              <Card
                key={timeline.id}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-in fade-in slide-in-from-bottom-4 flex flex-col"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
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
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {timeline.title}
                  </CardTitle>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p className="font-medium">{timeline.company}</p>
                    <p className="text-xs">{timeline.location}</p>
                    <p className="text-xs">
                      {timeline.start_year} - {timeline.end_year}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {timeline.description}
                  </p>

                  <div className="space-y-3 flex-1">
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Achievements</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {timeline.achievements.length > 0 &&
                          timeline.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">
                        {timeline.technologies.length > 0
                          ? "Technologies:"
                          : ""}
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
