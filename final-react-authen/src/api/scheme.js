import { REST_API_METHOD as METHOD, BASE_URL } from '../container'

const API_SCHEME = {
    // update when apply real authen api
    AUTHEN: {
        VALIDATE_TOKEN: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        LOGIN: {
            url: `${BASE_URL}/login`,
            method: METHOD.POST
        },
        REGISTER: {
            url: `${BASE_URL}/register`,
            method: METHOD.POST
        },
        LOGOUT: {
            url: `${BASE_URL}/logout`,
            method: METHOD.POST
        }
    },
    // business api
    USERS: {
        FETCH_LIST: {
            url: `${BASE_URL}/users`,
            method: METHOD.GET
        },
        FETCH_DETAIL: {
            url: `${BASE_URL}/user/:id`,
            method: METHOD.GET
        },
        CREATE: {
            url: `${BASE_URL}/user`,
            method: METHOD.POST
        },
        UPDATE: {
            url: `${BASE_URL}/user/:id`,
            method: METHOD.PUT
        },
        DELETE: {
            url: `${BASE_URL}/user/:id`,
            method: METHOD.DELETE
        },
        USER_TO_ADMIN: {
            url: `${BASE_URL}/update-admin/:id`,
            method: METHOD.PUT
        },
    }
}

export default API_SCHEME