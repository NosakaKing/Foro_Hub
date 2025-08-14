import { useQuery } from "@tanstack/react-query";
import { Topic, TopicParams } from "../types/topic";
import { fetchTopicById} from "../services/topic.service";

export const useTopicById = (params: TopicParams) => {
    const getTopicById = useQuery<Topic>({
        queryKey: ["topic", params],
        queryFn: () => fetchTopicById(params),
        enabled: !!params.id,
    });
    return getTopicById;
}