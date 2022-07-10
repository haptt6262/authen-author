const createLocalStorage = () => {
    const { localStorage } = window
    const getToken = () => {
        return localStorage.getItem('auth-token')
    }
    console.log("getToken: ", getToken);
    const setToken = (token) => {
        localStorage.setItem('auth-token', token)
    }
    const removeToken = () => {
        localStorage.removeItem('auth-token')
    }
    return {
        getToken,
        setToken,
        removeToken
    }
}


export default createLocalStorage;