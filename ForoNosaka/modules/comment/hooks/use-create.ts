import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommentFormData } from "../types/comment";
import { createComment } from "../services/comment.service";
import { toast } from "sonner";

export const useCreateComment = () => {
    const queryClient = useQueryClient();
    const mutationCreateComment = useMutation({
        mutationFn: (comment: CommentFormData)=> createComment(comment),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["comments"] });
            queryClient.invalidateQueries({ queryKey: ["topic"] });

            toast.success("Éxito", { description: data.message || "Tu comentario ha sido publicado." });
        },
        mutationKey: ["createComment"],
    });
    return mutationCreateComment;
}