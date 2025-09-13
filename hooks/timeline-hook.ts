import { CreateTimelineBody } from "@/schemas/timeline";
import { useMutation } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase/client";

export const useSetTimeLine = () => {
  const supabase = createClient();
  const {
    data,
    isPending: loading,
    mutateAsync: setTimeLine,
  } = useMutation({
    mutationKey: ["setTimeLine"],
    mutationFn: async (body: CreateTimelineBody) => {
      const response = await supabase.from("time_line").insert([body]);
      return response;
    },
  });
  return { data, loading, setTimeLine };
};
