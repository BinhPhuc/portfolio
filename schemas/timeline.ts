import z from "zod";

export const createTimelineSchema = z.object({
  start_year: z.string().min(1, "Start year is required"),
  end_year: z.string().min(1, "End year is required"),
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  location: z.string().min(1, "Location is required"),
  type: z.enum(["work", "education"], { required_error: "Type is required" }),
  description: z.string().min(1, "Description is required"),
  achievements: z.array(z.string()),
  technologies: z.array(z.string()),
});

export type CreateTimelineBody = z.infer<typeof createTimelineSchema>;
