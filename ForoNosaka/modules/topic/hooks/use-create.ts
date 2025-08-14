import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TopicFormData } from "../types/topic";
import { createTopico } from "../services/topic.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useCreateTopic = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const mutationCreateTopic = useMutation({
        mutationFn: (topic: TopicFormData) => createTopico(topic),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["topics"] });
            router.push(`/dashboard/topico/${data.id}/${data.titulo}`);
            toast.success("Éxito", { description: data.message || "Tópico creado exitosamente." });
        },
        mutationKey: ["createTopic"],
    });
    return mutationCreateTopic;
}
