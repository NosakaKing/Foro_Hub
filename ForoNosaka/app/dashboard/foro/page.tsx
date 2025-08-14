import { Button } from "@/components/ui/button";
import TopicList from "@/modules/topic/components/topic-list";
import Link from "next/link";

export default function Topics() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2>Topicos mas recientes</h2>
        <Link href="/dashboard/topico">
          <Button variant="outline">Crear nuevo tópico</Button>
        </Link>
      </div>
      <TopicList />
    </div>
  );
}
