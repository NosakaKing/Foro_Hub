import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Whoami } from "@/modules/auth/types/auth";

interface WhoamiStore {
  user: Whoami | null;
  setUser: (user: Whoami) => void;
  clearUser: () => void;
}

export const useWhoamiStore = create<WhoamiStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => {
        set({ user });
      },
      clearUser: () => {
        set({ user: null });
      },
    }),
    {
      name: "whoami",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        user: {
          id: state.user?.id,
          nombre: state.user?.nombre,
          apellido: state.user?.apellido,
          rol: state.user?.rol,
        },
      }),
    }
  )
);
