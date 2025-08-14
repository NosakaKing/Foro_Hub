import { useTopicById } from "../hooks/use-topic-id";
import { TopicIdParams } from "../types/topic";
import { Badge } from "@/components/ui/badge";
import CreateComment from "@/modules/comment/components/comment-form";
import CommentsList from "@/modules/comment/components/comment-list";
import MarkdownRenderer from "@/components/markdown/mardown";
import { useWhoamiStore } from "@/stores/use-whoami";
import { SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AvatarUser } from "@/components/avatar/avatar";

export default function TopicId({ id }: TopicIdParams) {
    const { data: topics } = useTopicById({ id });
    const { user } = useWhoamiStore();

    return (
        <div>
            <div className="flex flex-col gap-4 pb-5 border-b border-muted-foreground">
                <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
                    <h2>{topics?.titulo}</h2>
                    <Badge className="text-xs">Comentarios: {topics?.totalComentarios}</Badge>
                </div>
                <p className="text-muted-foreground">{topics?.fechaCreacion}</p>
                <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2 items-center">
                        <AvatarUser name={topics?.nombreAutor} />
                        <p>Por: {topics?.nombreAutor}</p>
                    </div>
                    <div>
                        {user?.id === topics?.idAutor && (
                            <Link href={`/dashboard/topico/edit/${topics?.id}`}>
                                <Button variant="outline">
                                    <SquarePen />
                                </Button>
                            </Link>

                        )}
                    </div>
                </div>
                <Badge>{topics?.nombreCurso}</Badge>
                <div className="flex flex-col md:flex-row gap-5 justify-between md:items-center">
                    <MarkdownRenderer content={topics?.mensaje || ""} />
                    {topics?.solucionId && (
                        <Badge className="text-xs">
                            <Link href={`#comment-${topics?.solucionId}`}>
                                Ir a la solución
                            </Link>
                        </Badge>
                    )}
                </div>
            </div>
            <div>
                <CommentsList id={topics?.id} idAutor={topics?.idAutor} status={topics?.estado} idSolution={topics?.solucionId} userId={user?.id} />
            </div>
            <div className="py-5">
                <h2>¿Que opinas sobre aquello?</h2>
                <CreateComment topicId={topics?.id?.toString() || ""} />
            </div>
        </div>
    );
}