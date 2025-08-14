import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TopicFormData } from "../types/topic";
import { createTopico, editTopic } from "../services/topic.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useEditTopic = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const mutationEditTopic = useMutation({
        mutationFn: (topic: TopicFormData) => editTopic(topic),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["topics"] });
            router.push(`/dashboard/topico/${data.id}/${data.titulo}`);
            toast.success("Éxito", { description: data.message || "Tópico editado exitosamente." });
        },
        mutationKey: ["editTopic"],
    });
    return mutationEditTopic;
}
