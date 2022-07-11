import { takeLatest, put } from 'redux-saga/effects'
import { AccountActions } from '../actions'
import { actionTypes } from '../container'
import { authApi } from '../api'

function* handleLogin({ payload }) {
    try {
        const res = yield authApi.login(null, null, payload)
        // console.log("du lieu: ", res);
        if (res.message) {
            if (res.message === "Account is not found!") {
                window.alert("Account is not found!")
            }
        }
        if (res.error === "Incorrect password") {
            window.alert("Incorrect")
        }
        else {
            yield put(AccountActions.LoginAction.loginSuccess({
                list: res.listUsers
            }))
            window.localStorage.setItem("auth-token", res.token);
            window.localStorage.setItem("role", res.role);
            window.location.href = 'http://localhost:3000/home'
        }
    } catch (error) {
        yield put(AccountActions.LoginAction.loginFailure({
            message: error.message
        }))
    }
}
function* handleRegister({ payload }) {
    try {
        const res = yield authApi.register(null, null, payload)
        // console.log("res in saga: ", res);
        if (res.message) {
            if (res.message === "Account already exists!") {
                window.alert("Account already exist!")
            }
        }
        if (res.status) {
            alert(`${res.status}`)
            // console.log("=========================>");
            window.location.href = "http://localhost:3000/login"
        }
    } catch (error) {
        yield put(AccountActions.RegisterAction.registerFailure({
            message: error.message
        }))
    }
}

const accountSaga = [
    takeLatest(actionTypes.AccountTypes.LOGIN_REQUEST, handleLogin),
    takeLatest(actionTypes.AccountTypes.REGISTER_REQUEST, handleRegister)
]

export default accountSaga;