import { CreateTimelineBody } from "@/schemas/timeline";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { timelineService } from "@/services/timeline-services";

export const useSetTimeLine = () => {
  const queryClient = useQueryClient();
  const {
    data,
    isPending: loading,
    mutateAsync: setTimeLine,
    error,
  } = useMutation({
    mutationKey: ["setTimeLine"],
    mutationFn: async (body: CreateTimelineBody) => {
      const response = await timelineService.create(body);
      return response.payload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTimeLines"] });
    },
  });
  return { data, loading, error, setTimeLine };
};

export const useGetTimeLines = () => {
  const { data: timeLines, isPending: loading } = useQuery({
    queryKey: ["getTimeLines"],
    queryFn: async () => {
      const response = await timelineService.getAll();
      return response.payload;
    },
  });
  return { timeLines: timeLines ?? [], loading };
};
