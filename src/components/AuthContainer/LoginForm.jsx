import {useState} from "react";
import {useForm} from "react-hook-form";
import {NavLink, useNavigate} from "react-router-dom";

import styles from './auth.module.css';
import {authService} from "../../services";

const LoginForm = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {isValid}
    } = useForm({
        mode: "onBlur"
    });

    const login = async (user) => {
        try {
            await authService.login(user);
            navigate('/courses');
        } catch (e) {
            setError(true);
        }
    };

    return (
        <div className={styles.logBlock}>
            <form className={styles.authForm} onSubmit={handleSubmit(login)}>
                <h1>Login</h1>
                {error && <span>Username or password incorrect</span>}

                <input type="email" placeholder={'Email'} {...register('email', {required: true})}/>
                <input type="password" placeholder={'Password'} {...register('password', {required: true})}/>

                <button disabled={!isValid} id={styles.btnLog}>Log In</button>
                <span>Don`t have an account? <NavLink to={'/register'}>Sing Up</NavLink></span>

            </form>
        </div>
    );
};

export {LoginForm};
