import { useQuery } from "@tanstack/react-query";
import { Whoami } from "../types/auth";
import { fetchWhoami } from "../services/auth.service";

export const useWhoami = () => {
    const getWhoami = useQuery<Whoami>({
        queryKey: ["whoami"],
        queryFn: fetchWhoami,
    });
    return getWhoami;
}