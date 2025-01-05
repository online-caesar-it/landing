import { useQuery } from "@tanstack/react-query";
import { userApi } from "../api/user.api";

export const useSession = () => {
  const data = useQuery({
    queryKey: ["get-self"],
    queryFn: userApi.getSelf,
    queryHash: "15m",
  });
  return data;
};
