import { TimelineForm } from "@/components/admin/timeline-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/admin/timeline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Timeline Manage Page
            </Link>
          </Button>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Create Timeline Entry</h1>
            <p className="text-muted-foreground">Add new timeline entry</p>
          </div>

          <TimelineForm />
        </div>
      </div>
    </div>
  );
}
