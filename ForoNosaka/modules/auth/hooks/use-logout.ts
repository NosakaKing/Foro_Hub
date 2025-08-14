import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authLogout } from "../services/auth.service";
import { useWhoamiStore } from "@/stores/use-whoami";

export const useLogout = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: authLogout,
        mutationKey: ["logout"],

        onSuccess: () => {
            queryClient.removeQueries({ queryKey: ["auth"] });
            useWhoamiStore.getState().clearUser();
            router.push("/");
            toast.success("Sesión cerrada", {
                description: "Has cerrado sesión correctamente.",
            });
        },
    });
    return mutation;
};
