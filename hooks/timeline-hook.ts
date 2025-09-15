import { CreateTimelineBody } from "@/schemas/timeline";
import { useMutation } from "@tanstack/react-query";
import { timelineService } from "@/services/timeline-services";

export const useSetTimeLine = () => {
  const {
    data,
    isPending: loading,
    mutateAsync: setTimeLine,
  } = useMutation({
    mutationKey: ["setTimeLine"],
    mutationFn: async (body: CreateTimelineBody) => {
      const response = await timelineService.create(body);
      return response;
    },
  });
  return { data, loading, setTimeLine };
};
