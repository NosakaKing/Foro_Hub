"use client";
import { useForm } from "react-hook-form";
import { useCreateTopic } from "../hooks/use-create";
import z from "zod";
import { topicSchema } from "../models/form.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import InputField from "@/components/forms/input";
import { Button } from "@/components/ui/button";
import SelectField from "@/components/forms/select";
import { useCourse } from "@/modules/course/hooks/use-course";
import { TopicParams } from "../types/topic";
import { useEditTopic } from "../hooks/use-edit";
import { useTopicEditById } from "../hooks/use-edit-id";

export default function CreateTopic({ id }: TopicParams) {
    const { mutate: createTopic, isPending } = useCreateTopic();
    const { mutate: editTopic, isPending: isEditing } = useEditTopic();
    const { data: topic } = useTopicEditById({ id });
    const { data: courses } = useCourse();

    const form = useForm<z.infer<typeof topicSchema>>({
        resolver: zodResolver(topicSchema),
        defaultValues: {
            id: id ? id.toString() : undefined,
            title: "",
            message: "",
            courseId: "",
        },
        values: topic
            ? {
                id: id ? id.toString() : undefined,
                title: topic?.titulo,
                message: topic?.mensaje,
            }
            : undefined, 
    });

    const onSubmit = async (values: z.infer<typeof topicSchema>) => {
        if (id) {
            values.id = id.toString();
            editTopic(values);
            form.reset();
            return;
        }
        createTopic(values);
        form.reset();
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="flex flex-col gap-6">
                    <h1 className="text-2xl font-bold">  {id ? "Editar Tema" : "Crear Nuevo Tópico"}</h1>
                    <InputField control={form.control} name="title" label="Título" type="text" placeholder="Ingrese el título del tema" />
                    <InputField type="textarea" control={form.control} name="message" label="Mensaje" placeholder="Ingrese el mensaje del tema" />
                    {!id && (
                        <SelectField control={form.control} name="courseId" label="Curso" placeholder="Seleccione el curso"
                            options={courses?.map(course => ({
                                value: course.id.toString(),
                                label: course.nombre
                            })) ?? []}
                        />
                    )}
                    <Button className="w-full" loading={isPending || isEditing} type="submit">Guardar Cambios</Button>
                </div>
            </form>
        </Form>
    )
}