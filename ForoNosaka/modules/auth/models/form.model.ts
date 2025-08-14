import { z } from "zod";

export const loginSchema = z.object({
  username: z.string()
    .trim()
    .nonempty("El nombre de usuario es obligatorio"),
  password: z.string()
    .trim()
    .nonempty("La contraseña es obligatoria")
    .min(8, { message: "La contraseña debe tener más de 8 caracteres" })
    .max(32, { message: "La contraseña debe tener menos de 32 caracteres" }),
});
