"use client";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useTopic } from "../hooks/use-topic";
import PaginationControls from "@/components/pagination/pagination";
import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { TopicStatus } from "@/components/status/status";
import { AvatarUser } from "@/components/avatar/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCourse } from "@/modules/course/hooks/use-course";

export default function TopicList() {
    const [page, setPage] = useState(0);
    const [courseId, setCourseId] = useState<number | undefined>(undefined);
    const { data: courses } = useCourse();

    const size = 10;
    const { data: topics, isLoading } = useTopic({ page, size, courseId: courseId });
    const totalItems = topics?.totalElements ?? 0;
    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <Card className="mb-4">
                <CardHeader className="flex flex-col md:grid">
                        <CardTitle>Filtros de Búsqueda</CardTitle>
                        <CardDescription>Explora los tópicos más recientes y participa en las discusiones.</CardDescription>
                        <CardAction>
                            <Select onValueChange={(value) => setCourseId(Number(value))}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Seleccione la categoría" />
                                </SelectTrigger>
                                <SelectContent>
                                    {courses?.map((course) => (
                                        <SelectItem key={course.id} value={course.id.toString()}>
                                            {course.nombre}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </CardAction>
                </CardHeader>
            </Card>
            {topics?.content.map((topic) => (
                <Card className="mb-4" key={topic.id}>
                    <CardHeader className="flex flex-col md:grid">
                        <CardTitle>
                            <Link href={`/dashboard/topico/${topic.id}/${topic.titulo}`}>
                                {topic.titulo}
                            </Link>
                        </CardTitle>
                        <CardDescription>
                            <Badge>{topic?.nombreCurso}</Badge>
                        </CardDescription>
                        <CardAction>
                            <div className="flex gap-2 items-center w-36">
                                <AvatarUser name={topic?.nombresAutor} />
                                <p>Por: {topic.nombreAutor}</p>
                            </div>
                        </CardAction>
                    </CardHeader>

                    <CardContent>
                        <p className="truncate">{topic.mensaje}</p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex justify-between items-center w-full">
                            <p>{topic.fechaCreacion}</p>
                            <TopicStatus status={topic.estado} />
                        </div>
                    </CardFooter>
                </Card>
            ))}
            <PaginationControls
                page={page}
                pageSize={size}
                totalItems={totalItems}
                onPageChange={setPage}
            />
        </>
    );
}