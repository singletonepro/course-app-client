import styles from './Header.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import {authService} from "../../services/index.js";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        authService.deleteTokens();
        navigate('/login');
    }

    return (
        <div className={styles.Header}>
            <div className={styles.links}>
                <NavLink to={"/courses"}>Courses</NavLink>
                <NavLink to={"/my-courses"}>My Courses</NavLink>
            </div>
            <button className={styles.logout} onClick={handleLogout}>Log Out</button>
        </div>
    );
};

export {Header};
