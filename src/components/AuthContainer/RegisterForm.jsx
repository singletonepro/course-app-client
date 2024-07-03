import {useState} from "react";
import {useForm} from "react-hook-form";
import {NavLink, useNavigate} from "react-router-dom";

import styles from './auth.module.css';
import {authService} from "../../services/index.js";

const RegisterForm = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({
        mode: "onBlur",
    });

    const registration = async (user) => {
        try {
            await authService.register(user);
            navigate('/courses');
            console.log(user)
        } catch (e) {
            setError(true);
        }
    };

    return (
        <div className={styles.regBlock}>
            <form className={styles.authForm} onSubmit={handleSubmit(registration)}>
                <h1>Register</h1>
                {error && <span>User with this username already exists</span>}

                <input type="text" placeholder={'Name'} {...register('name', {required: true})}/>

                <input type="email" placeholder={'Email'} {...register('email', {required: true})}/>

                <input type="password" placeholder={'Password'} {...register('password', {required: true})}/>

                <button disabled={!isValid} id={styles.btnReg}>Register</button>
                <span>Have an account? <NavLink to={'/login'}>Log In</NavLink></span>
            </form>
        </div>
    );
};

export {RegisterForm};
