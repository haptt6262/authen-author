import { takeLatest, put } from 'redux-saga/effects'
import { AccountActions } from '../actions'
import { actionTypes } from '../container'
import { authApi } from '../api'

function* handleLogin({ payload }) {
    try {
        const res = yield authApi.login(null, null, payload)
        console.log("du lieu: ", res);
        yield put(AccountActions.LoginAction.loginSuccess({
            list: res.listUsers
        }))
        window.localStorage.setItem("auth-token", res.token);
        window.localStorage.setItem("role", res.role);
    } catch (error) {
        yield put(AccountActions.LoginAction.loginFailure({
            message: error.message
        }))
    }
}
function* handleRegister({ payload }) {
    try {
        yield authApi.register(null, null, payload)
        yield put(AccountActions.RegisterAction.registerSuccess())
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