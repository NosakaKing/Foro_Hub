import { QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error) => {
        const axiosError = error as AxiosError<{ message?: string }>;
        const message =
          axiosError?.response?.data?.message ||
          axiosError?.message ||
          "Ocurrió un error";

        toast.error("Error en la operación", {
          description: message,
        });
      },
    },
  },
});
