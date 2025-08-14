import { useForm } from "react-hook-form";
import { useCreateComment } from "../hooks/use-create";
import { commentSchema } from "../models/form.model";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/forms/input";
import { Button } from "@/components/ui/button";
import { CreateCommentProps } from "../types/comment";


export default function CreateComment({ topicId }: CreateCommentProps) {
    const { mutate: createComment, isPending } = useCreateComment();

    const form = useForm<z.infer<typeof commentSchema>>({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            message: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof commentSchema>) => {
        createComment({ ...values, topicId });
        form.reset();
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="flex flex-col gap-6 pt-5">
                    <FormInputField type="textarea" control={form.control} name="message" label="Mensaje" placeholder="Ingrese su comentario" />
                    <Button className="w-full" loading={isPending} type="submit">Crear Comentario</Button>
                </div>
            </form>
        </Form>
    );
}