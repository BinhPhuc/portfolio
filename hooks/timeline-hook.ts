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
    mutationFn: async ({
      body,
      type,
      id,
    }: {
      body: CreateTimelineBody;
      type: "create" | "update";
      id?: string;
    }) => {
      if (type === "update" && id) {
        const response = await timelineService.update(body, id);
        return response.payload;
      }
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
