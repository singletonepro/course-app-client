import {createBrowserRouter, Navigate} from "react-router-dom";

import {AuthRequired} from "./hoc";
import {AuthLayout, MainLayout, PublicLayout} from "./layouts";
import {LoginPage, CoursesPage,  MyCoursePage, RegisterPage} from "./pages";

export const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'/login'}/>
            },
            {
                element: <PublicLayout/>, children: [
                    {
                        path: 'login', element: <LoginPage/>
                    },
                    {
                        path: 'register', element: <RegisterPage/>
                    }
                ]
            },
            {
                element: <AuthRequired><AuthLayout/></AuthRequired>, children: [
                    {
                        path: 'courses', element: <CoursesPage/>
                    },
                    {
                        path: 'my-courses', element: <MyCoursePage/>
                    }
                ]
            }
        ]
    }
]);
