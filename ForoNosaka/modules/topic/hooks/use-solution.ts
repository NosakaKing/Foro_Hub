import { useMutation, useQueryClient } from "@tanstack/react-query";
import {markSolvedTopic } from "../services/topic.service";
import { toast } from "sonner";
import { MarkSolutionParams } from "../types/topic";

export const useMarkTopicAsSolved = () => {
    const queryClient = useQueryClient();

    const mutationMarkTopicAsSolved = useMutation({
        mutationFn: (params: MarkSolutionParams) => markSolvedTopic(params),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["topic"] });
            toast.success("Éxito", { description: data.message || "Tópico marcado como resuelto." });
        },
        mutationKey: ["markTopicAsSolved"],
    });
    return mutationMarkTopicAsSolved;
}
