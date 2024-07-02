import {useEffect, useState} from "react";

import styles from "../../CourseContainer/Courses/Courses.module.css";
import {authService, courseService} from "../../../services";
import {MyCourse} from "../MyCourse/MyCourse";
import {LoadingPage} from "../../../pages";

const MyCourses = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        authService.me()
            .then(({data}) => {
                courseService.getCoursesByUserId(data.id)
                    .then(({data}) => setCourses(data))
                    .finally(() => setIsLoading(false));
            });
    }, []);

    if (isLoading) return <LoadingPage/>

    if (!courses.length) {
        return <div className={styles.Courses}><h1>No saved courses</h1></div>
    }


    return (
        <div className={styles.Courses}>
            <h1>Applied Courses</h1>
            <div className={styles.coursesList}>
                {courses.length ? courses.map(course => (
                    <MyCourse key={course._id} course={course}/>
                )) : null}
            </div>
        </div>
    );
};

export {MyCourses};
