import {Navigate, Outlet} from "react-router-dom";

import {authService} from "../services";

const PublicLayout = () => {
    const token = authService.getAccessToken();

    if (token) {
        return <Navigate to={'/courses'}/>
    }

    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {PublicLayout};
