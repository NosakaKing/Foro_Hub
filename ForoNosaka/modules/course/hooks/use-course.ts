import { useQuery } from "@tanstack/react-query";
import { Course } from "../types/course";
import { fetchCourse } from "../services/course.service";

export const useCourse = () => {
    const getCourse = useQuery<Course[]>({
        queryKey: ["courses"],
        queryFn: fetchCourse,
    });
    return getCourse;
};