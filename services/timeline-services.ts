import { httpClient } from "@/lib/http";
import { CreateTimelineBody } from "@/schemas/timeline";

export const timelineService = {
  create: (data: CreateTimelineBody): Promise<CreateTimelineBody> => {
    return httpClient.post<CreateTimelineBody>("/timeline", data);
  },
};
