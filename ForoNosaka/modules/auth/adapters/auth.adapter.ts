import { AuthFormData, AuthLogin } from "../types/auth";

export function createAuthAdapter(data: AuthFormData): AuthLogin {
  return {
    usuario: data.username,
    contrasenia: data.password,
  };
}