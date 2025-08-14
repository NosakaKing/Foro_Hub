import apiClient from "@/services/apiClient"
import { Course } from "../types/course"

export const fetchCourse = async () => {
    const response = await apiClient.get<Course[]>("/cursos");
    return response.data;
};