import {Outlet} from "react-router-dom";
import {Header} from "../components/index.js";

const AuthLayout = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {AuthLayout};
