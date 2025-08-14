export interface AuthFormData {
    username: string;
    password: string;
}

export interface AuthLogin {
    usuario: string;
    contrasenia: string;
}

export enum AuthRoles {
    ADMIN = "Administrador",
    USER = "Usuario",
}

export interface Whoami {
    id: number;
    nombre: string;
    apellido: string;
    nombreUsuario: string;
    correo: string;
    rol: AuthRoles;
}