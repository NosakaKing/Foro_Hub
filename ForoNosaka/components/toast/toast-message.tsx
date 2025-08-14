// hooks/useCustomToast.ts
import { toast } from "sonner";

export function useCustomToast() {
  const showSuccessToast = (description?: string) => {
    toast.success("¡Operación Exitosa!", {
      description: description || "La operación se ha realizado con éxito.",
      duration: 5000,
    });
  };

  const showErrorToast = (description?: string) => {
    toast.error("¡Algo salió mal!", {
      description: description || "No se pudo completar la operación.",
      duration: 5000,
    });
  };

  const showNeutralToast = (title: string, description?: string) => {
    toast(title, {
      description,
      duration: 5000,
    });
  };

  return {
    showSuccessToast,
    showErrorToast,
    showNeutralToast,
  };
}
