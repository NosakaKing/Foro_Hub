export interface BaseTopic {
    id?: number;
    titulo: string;
    mensaje: string;
    estado?: string;
    idCurso?: number;
    idAutor?: number;
    nombreCurso?: string;
    nombreAutor?: string;
    nombresAutor?: string;
    totalComentarios?: number;
    solucionId?: number | null;
}


export interface TopicFormData {
    id?: string;
    title: string;
    message: string;
    courseId?: string;
}


export interface RawTopic extends BaseTopic {
    fechaCreacion: Date;
}

export interface Topic extends BaseTopic {
    fechaCreacion?: string;
}

export interface FetchTopicParams {
    page?: number;
    size?: number;
    courseId?: number;
}

export interface TopicIdParams {
    id: number;
    slug?: string | undefined;
};

export interface TopicParams {
    id?: number;
};

export interface MarkSolutionParams {
    topicId: number | undefined;
    commentId: number;
}