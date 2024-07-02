import {apiService} from "./apiService.js";
import {urls} from "../constants/index.js";

export const courseService = {
    getAll: () => apiService.get(urls.courses.base),
    getById: (id) => apiService.get(urls.courses.byId(id)),
    applyCourse: (userId, courseId) => apiService.post(urls.courses.subscribe(userId, courseId)),
    getCoursesByUserId: (userId) => apiService.get(urls.courses.byUserId(userId))
}
