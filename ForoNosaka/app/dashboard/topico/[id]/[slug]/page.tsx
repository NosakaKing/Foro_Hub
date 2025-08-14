"use client";
import TopicId from "@/modules/topic/components/topic-id";
import { useParams } from "next/navigation";

export default function TopicoIdPage() {
    const params = useParams();
    const id = Number(params.id);
    const slug = String(params.slug);

    return (
        <TopicId id={id} slug={slug} />
    )

}