import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Auth = ({ children }) => {
    const location = useLocation();
    const accessToken = window.localStorage.getItem('auth-token')
    const staticPagePath = ["/login", "/register"];
    useEffect(() => {
        if (!accessToken) {
            if (staticPagePath.indexOf(location.pathname) === "-1") {
                window.location.href = "http://localhost:3000/login";
            }
        } else {
            if (location.pathname === '/login') {
                window.history.back()
            }
            location.href = "http://localhost:3000/home"
        }
    });
    return <Fragment>{children}</Fragment>;
};

export default Auth;