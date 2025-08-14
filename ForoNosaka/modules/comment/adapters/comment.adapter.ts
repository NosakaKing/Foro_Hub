import { formatFechaRelativa } from "@/utils";
import {Comment, CommentData, CommentFormData, RawComment } from "../types/comment";

export function commentAdapter(data: RawComment): Comment {
    return {
        id: data.id,
        mensaje: data.mensaje,
        nombreAutor: data.nombreAutor,
        fechaCreacion: formatFechaRelativa(data.fechaCreacion),
        idAutor: data.idAutor,
    };
}

export function commentAdapterList(data: RawComment[]): Comment[] {
    return data.map(commentAdapter);
}

export function createCommentAdapter(data: CommentFormData): CommentData{
    return {
        idTopico: Number(data.topicId),
        mensaje: data.message,
    };
}