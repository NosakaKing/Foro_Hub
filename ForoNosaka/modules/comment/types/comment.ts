export interface CommentFormData {
    topicId: string;
    message: string;
}

export interface CommentData {
    idTopico: number;
    mensaje: string;
}

export interface BaseComment {
    id: number;
    mensaje: string;
    nombreAutor: string;
    idAutor: number;
}

export interface RawComment extends BaseComment {
    fechaCreacion: Date;
}

export interface Comment extends BaseComment {
    fechaCreacion?: string;
}

export interface CreateCommentProps {
    topicId: string;
}

export interface CommentListProps {
    id: number | undefined;
    idAutor: number | undefined;
    status?: string;
    idSolution?: number | null;
    userId?: number | null;
}