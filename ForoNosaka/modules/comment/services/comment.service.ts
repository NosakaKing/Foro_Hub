import apiClient from "@/services/apiClient";
import { commentAdapterList, createCommentAdapter } from "../adapters/comment.adapter";
import { CommentFormData, RawComment } from "../types/comment";

export const fetchComments = async(params: { id: number | undefined }) => {
    const response = await apiClient.get<RawComment[]>("/comentarios/byId", { params });
    return commentAdapterList(response.data);
}

export const createComment = async (comment: CommentFormData) => {
    const adapterCommentAdapter = createCommentAdapter(comment);
    const response = await apiClient.post("/comentarios", adapterCommentAdapter);
    return response.data;
};
