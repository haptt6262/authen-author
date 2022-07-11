import { Fragment, useEffect } from "react";
import { useLocation, BrowserHistory } from "react-router-dom";
import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { BASE_URL } from "../container"

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
                let path = location.href
                let index = BASE_URL.length
                // let route = path.slice(index)
                console.log(index, location.href);



                // window.location.href = `${BASE_URL}+${path.slice(index)}`
            }
            location.href = "http://localhost:3000/home"
        }
    });
    return <Fragment>{children}</Fragment>;
};

export default Auth;