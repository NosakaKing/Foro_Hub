import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authLogin, fetchWhoami } from "../services/auth.service";
import { AuthFormData } from "../types/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useWhoamiStore } from "@/stores/use-whoami";

export const useLogin = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const setUser = useWhoamiStore((state) => state.setUser);

    const mutationAuthLogin = useMutation({
        mutationFn: (user: AuthFormData) => authLogin(user),
            onSuccess: async (data) => {
            queryClient.invalidateQueries({ queryKey: ["auth"] });
            router.push("/dashboard");
            toast.success("Éxito", { description: data.message || "Inicio de sesión exitoso." });
            try {
                const user = await fetchWhoami();
                setUser(user);
            } catch (error) {
                toast.error("Error al obtener los datos del usuario");
            }
        },
        mutationKey: ["auth"],
    })
    return mutationAuthLogin;
}