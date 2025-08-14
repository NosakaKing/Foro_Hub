import apiClient from "@/services/apiClient"
import { createTopicAdapter, editTopicAdapter, topicAdapter, topicPageAdapter } from "../adapters/topic.adapter";
import { FetchTopicParams, MarkSolutionParams, RawTopic, Topic, TopicFormData, TopicParams } from "../types/topic";
import { PagedResponse } from "@/types/PagedResponse";

export const fetchTopics = async (params?: FetchTopicParams) => {
    const response = await apiClient.get<PagedResponse<RawTopic>>("/topic", { params });
    return topicPageAdapter(response.data);
};

export const createTopico = async (topico: TopicFormData) => {
    const adapterTopicAdapter = createTopicAdapter(topico);
    const response = await apiClient.post("/topic", adapterTopicAdapter);
    return response.data;
};

export const fetchTopicById = async (params: TopicParams) => {
    const response = await apiClient.get<RawTopic>("/topic/byId", { params });
    return topicAdapter(response.data);
};

export const fetchTopicEdit = async (params: TopicParams) => {
    const response = await apiClient.get<Topic>("/topic/byEditId", { params });
    return response.data;
};

export const markSolvedTopic = async (params?: MarkSolutionParams) => {
    const response = await apiClient.patch("/topic/markSolution", null, { params });
    return response.data;
};

export const editTopic = async (topico: TopicFormData) => {
    const adapterTopicAdapter = editTopicAdapter(topico);
    const response = await apiClient.put("/topic", adapterTopicAdapter);
    return response.data;
}