import { useQuery } from "@tanstack/react-query";
import { useSession as useSessionOriginal } from "next-auth/react";

export const useSession = () => {
  const { data: session } = useSessionOriginal();
  const { data: self } = useQuery({
    queryKey: ["self"],
    queryFn: async () => {
      return;
    },
  });
};
