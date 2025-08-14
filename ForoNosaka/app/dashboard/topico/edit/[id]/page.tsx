"use client";
import CreateTopic from "@/modules/topic/components/topic-form";
import { useParams } from "next/navigation";

export default function EditTopic() {
    const params = useParams();
    const id = Number(params.id);
    return (
        <div>
            <CreateTopic id={id} />
        </div>
    );
}