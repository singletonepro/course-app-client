const baseURL = 'http://localhost:3000/api';

const registration = '/registration';
const login = '/login';
const courses = '/courses';
const my_courses = '/my-courses';
const apply_course = '/apply-course';
const me = '/me'

const urls = {
    auth: {
        registration,
        login,
        me
    },
    courses: {
        base: courses,
        byId: (id) => `${my_courses}/${id}`,
        byUserId: (id) => `${my_courses}/${id}`,
        subscribe: (userId, courseId) => `${apply_course}/${userId}/${courseId}`,
    }
};

export {
    baseURL,
    urls
};
