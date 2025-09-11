"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Github } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface IProject {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  category: string;
  highlights: string[];
  githubUrl: string;
  liveUrl: string;
}

interface IProjectFilterProps {
  personalProjects: IProject[];
}

export default function ProjectFilter({
  personalProjects,
}: IProjectFilterProps) {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  return (
    <div className="grid gap-6">
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {Array.from(new Set(personalProjects.map((p) => p.category))).map(
              (category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              )
            )}
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {Array.from(new Set(personalProjects.map((p) => p.status))).map(
              (status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              )
            )}
          </SelectContent>
        </Select>
      </div>
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
                      Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{project.description}</p>

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
  );
}
