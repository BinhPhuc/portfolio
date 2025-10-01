"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";
import { useDeleteTimeLine } from "@/hooks/timeline-hook";
import toast from "react-hot-toast";

interface DeleteTimelineButtonProps {
  timelineId: string;
}

export function DeleteTimelineButton({
  timelineId,
}: DeleteTimelineButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { loading, deleteTimeLine } = useDeleteTimeLine();
  const router = useRouter();

  const handleDelete = async () => {
    if (loading) return;
    setIsDeleting(true);
    try {
      await deleteTimeLine(timelineId);
      toast.success("Timeline deleted successfully");
      router.refresh(); 
    } catch (error) {
      console.error("Error deleting post:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-destructive hover:text-destructive"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Timeline</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this timeline? This action cannot be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isDeleting}
            className="bg-destructive hover:bg-destructive/90 text-white"
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
