import { Fragment, useEffect } from "react";
import { useLocation, BrowserHistory } from "react-router-dom";
import { createBrowserHistory } from "history";


const Auth = ({ children }) => {
    const location = useLocation();
    const accessToken = window.localStorage.getItem('auth-token')
    const history = createBrowserHistory({ window })

    const staticPagePath = ["/login", "/register"];

    useEffect(() => {
        if (!accessToken) {
            if (staticPagePath.indexOf(location.pathname) === "-1") {
                window.location.href = "http://localhost:3000/login";
            }
        } else {
            if (staticPagePath.includes(location.pathname) === true) {
                // window.location.href = "http://localhost:3000/home"
                console.log(history, 'doi haaaaaaaaaaaaaaaaaaaaaaa');

            }
            location.href = "http://localhost:3000/home"
        }
    });
    return <Fragment>{children}</Fragment>;
};

export default Auth;