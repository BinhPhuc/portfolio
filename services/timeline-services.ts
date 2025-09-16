import { httpClient } from "@/lib/http";
import { CreateTimelineBody, GetTimeLines } from "@/schemas/timeline";

export const timelineService = {
  create: (data: CreateTimelineBody): Promise<CreateTimelineBody> => {
    return httpClient.post<CreateTimelineBody>("/timeline", data);
  },

  getAll: (): Promise<GetTimeLines> => {
    return httpClient.get<GetTimeLines>("/timeline");
  },
};
