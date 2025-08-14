import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "../services/comment.service";
import { Comment } from "../types/comment";

export const useComment = (params: { id: number | undefined }) => {
    const getComments = useQuery<Comment[]>({
        queryKey: ["comments", params],
        queryFn: () => fetchComments(params),
    });
    return getComments;
}