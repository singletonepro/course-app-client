import {Navigate} from "react-router-dom";

import {authService} from "../services/";

const AuthRequired = ({children}) => {
    const token = authService.getAccessToken();

    if (token) {
        return children
    }

    return <Navigate to={'/login'}/>
};

export {AuthRequired};
