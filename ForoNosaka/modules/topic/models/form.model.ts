import z from "zod";

export const topicSchema = z.object({
    id: z.string().optional(),
    title: z.string()
        .trim()
        .nonempty("El título es obligatorio")
        .max(100, { message: "El título debe tener como máximo 100 caracteres." }),
    message: z.string()
        .trim()
        .nonempty("El mensaje es obligatorio"),
    courseId: z.string().trim().optional()
}).superRefine((data, ctx) => {
    if (!data.id && (!data.courseId || data.courseId.trim() === "")) {
        ctx.addIssue({
            path: ["courseId"],
            message: "El curso es obligatorio en la creación",
            code: "custom",
        });
    }
});
