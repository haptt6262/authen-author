import { createAction } from "@reduxjs/toolkit"
import { actionTypes } from "../container"



export const LoginAction = {
    loginRequest: createAction(actionTypes.AccountTypes.LOGIN_REQUEST),
    loginSuccess: createAction(actionTypes.AccountTypes.LOGIN_SUCCESS),
    loginFailure: createAction(actionTypes.AccountTypes.LOGIN_FAILURE)
}
export const RegisterAction = {
    registerRequest: createAction(actionTypes.AccountTypes.REGISTER_REQUEST),
    registerSuccess: createAction(actionTypes.AccountTypes.REGISTER_SUCCESS),
    registerFailure: createAction(actionTypes.AccountTypes.REGISTER_FAILURE)
}
