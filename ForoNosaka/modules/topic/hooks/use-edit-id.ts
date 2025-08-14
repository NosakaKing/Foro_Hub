import { useQuery } from "@tanstack/react-query";
import { Topic, TopicParams } from "../types/topic";
import { fetchTopicEdit } from "../services/topic.service";

export const useTopicEditById = (params: TopicParams) => {
    const getTopicEditById = useQuery<Topic>({
        queryKey: ["topic-edit", params.id],
        queryFn: () => fetchTopicEdit(params),
        enabled: !!params.id,
    });
    return getTopicEditById;
}