import { AdaptedPagedResponse, PagedResponse } from '@/types/PagedResponse';
import { RawTopic, Topic, TopicFormData } from '../types/topic';
import { formatFechaRelativa } from '@/utils';

export function topicAdapter(data: RawTopic): Topic {

  return {
    id: data.id,
    titulo: data.titulo,
    mensaje: data.mensaje,
    estado: data.estado,
    totalComentarios: data.totalComentarios,
    solucionId: data.solucionId,
    nombreCurso: data.nombreCurso,
    nombreAutor: data.nombreAutor,
    nombresAutor: data.nombresAutor,
    idAutor: data.idAutor,
    fechaCreacion: formatFechaRelativa(data.fechaCreacion),  
  };
}


export function topicPageAdapter(data: PagedResponse<RawTopic>): AdaptedPagedResponse<Topic> {
  return {
    content: topicAdapterList(data.content),
    totalElements: data.totalElements,
    totalPages: data.totalPages,
  };
}

export function topicAdapterList(data: RawTopic[]): Topic[] {
  return data.map(topicAdapter);
}

export function createTopicAdapter(data: TopicFormData): Topic {
  return {
    titulo: data.title,
    mensaje: data.message,
    idCurso: Number(data.courseId),
  };
}

export function editTopicAdapter(data: TopicFormData): Topic {
  return {
    id: Number(data.id),
    titulo: data.title,
    mensaje: data.message,
  };
}
