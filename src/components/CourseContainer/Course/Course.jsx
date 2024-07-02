import styles from './Course.module.css';
import {authService, courseService} from "../../../services/index.js";

const Course = ({course}) => {
    const {_id, courseName, coursePrice, courseDuration} = course;

    const handleApplyCourse = async () => {
        const {data} = await authService.me();
        courseService.applyCourse(data.id, _id);
    }

    return (
        <div className={styles.CourseCard}>
            <h2>{courseName}</h2>
            <p>Price: ${coursePrice}</p>
            <p>Duration: {courseDuration}</p>
            <button className={styles.ApplyButton} onClick={handleApplyCourse}>Apply</button>
        </div>
    );
};

export {Course};
