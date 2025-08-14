import { useComment } from "../hooks/use-comment";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CommentListProps } from "../types/comment";
import MarkdownRenderer from "@/components/markdown/mardown";
import { CircleCheckBig, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMarkTopicAsSolved } from "@/modules/topic/hooks/use-solution";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { AvatarUser } from "@/components/avatar/avatar";

export default function CommentsList({ id, idAutor, status, idSolution, userId }: CommentListProps) {
    const { data: comments, isLoading } = useComment({ id: id, });
    const { mutate: markTopicAsSolved } = useMarkTopicAsSolved();
    if (isLoading) return <div>Loading comments...</div>;

    return (
        <div>
            {comments?.map(comment => (
                <div key={comment.id} id={`comment-${comment.id}`} className="flex flex-col gap-2 py-4 border-b border-muted-foreground">
                    <div className="flex flex-col md:flex-row justify-between md:items-center w-full">
                        <div className="flex gap-2 items-center">
                           <AvatarUser name={comment?.nombreAutor} />
                            <p>Por: {comment?.nombreAutor}</p>
                        </div>
                        <p className="text-muted-foreground">{comment?.fechaCreacion}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            {idSolution === comment.id ? (
                                <Badge>Solución del tópico</Badge>
                            ) : (
                                <Badge>Comentario</Badge>
                            )}
                        </div>

                        <div className="flex items-center gap-2 justify-end">
                            {userId === comment?.idAutor && (
                                <Button variant="outline">
                                    <Link href={`/dashboard/comment/edit/${comment.id}`}>
                                        <SquarePen />
                                    </Link>
                                </Button>
                            )}
                            {status === "NO_RESPONDIDO" && userId === idAutor && (
                                <Button variant="outline" onClick={() =>
                                    markTopicAsSolved({
                                        topicId: id,
                                        commentId: comment.id,
                                    })}>
                                    <CircleCheckBig />
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className="py-2">
                        <MarkdownRenderer content={comment?.mensaje || ""} />
                    </div>
                </div>
            ))}
        </div>
    );
}