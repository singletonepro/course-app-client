import styles from "../../CourseContainer/Course/Course.module.css";

const MyCourse = ({course}) => {
    const {courseName, coursePrice, courseDuration} = course;

    return (
        <div className={styles.CourseCard}>
            <h2>{courseName}</h2>
            <p>Price: ${coursePrice}</p>
            <p>Duration: {courseDuration}</p>
        </div>
    );
};

export {MyCourse};
