import { useQuery } from "@tanstack/react-query";
import { FetchTopicParams, Topic } from "../types/topic";
import { fetchTopics } from "../services/topic.service";
import { AdaptedPagedResponse } from "@/types/PagedResponse";

export const useTopic = (params?: FetchTopicParams) => {

    const getTopics = useQuery<AdaptedPagedResponse<Topic>>({
        queryKey: ["topics", params],
        queryFn: () => fetchTopics(params),
    });
    return getTopics;
}