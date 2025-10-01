import { httpClient } from "@/lib/http";
import { CreateTimelineBody, GetTimeLines } from "@/schemas/timeline";

export const timelineService = {
  create: (data: CreateTimelineBody) =>
    httpClient.post<CreateTimelineBody>("/timeline/create", data),

  update: (data: CreateTimelineBody, id: string) =>
    httpClient.put<CreateTimelineBody>(`/timeline/update/${id}`, data),

  getAll: () => httpClient.get<GetTimeLines>("/timeline"),

  delete: (id: string) => httpClient.delete(`/timeline/delete/${id}`),
};
