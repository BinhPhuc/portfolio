import { httpClient } from "@/lib/http";
import { CreateTimelineBody, GetTimeLines } from "@/schemas/timeline";

export const timelineService = {
  create: (data: CreateTimelineBody) =>
    httpClient.post<CreateTimelineBody>("/timeline", data),

  getAll: () => httpClient.get<GetTimeLines>("/timeline"),
};
