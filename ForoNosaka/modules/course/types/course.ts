export interface BaseCourse {
    id: number;
    nombre: string;
    descripcion?: string;
}

export interface Course extends BaseCourse {
}
