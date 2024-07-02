import {useEffect, useState} from "react";

import {courseService} from "../../../services";
import {Course} from "../Course/Course.jsx";
import styles from "./Courses.module.css";
import {LoadingPage} from "../../../pages/index.js";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        courseService.getAll()
            .then(({data}) => setCourses(data))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <LoadingPage/>

    return (
        <div className={styles.Courses}>
            <h1>Available Courses</h1>
            <div className={styles.coursesList}>
                {courses ? courses.map(course => (
                    <Course key={course._id} course={course}/>
                )) : null}
            </div>
        </div>
    );
};

export {Courses};
