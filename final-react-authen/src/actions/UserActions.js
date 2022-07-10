import { createAction } from "@reduxjs/toolkit"
import { actionTypes } from "../container"

export const fetchListUsersAction = {
    fetchListRequest: createAction(actionTypes.UserTypes.FETCH_USERS_REQUEST),
    fetchListSuccess: createAction(actionTypes.UserTypes.FETCH_USERS_SUCCESS),
    fetchListFailure: createAction(actionTypes.UserTypes.FETCH_USERS_FAILURE)
}

export const updateUserAction = {
    updateUserRequest: createAction(actionTypes.UserTypes.UPDATE_USER_REQUEST),
    updateUserSuccess: createAction(actionTypes.UserTypes.UPDATE_USER_SUCCESS),
    updateUserFailure: createAction(actionTypes.UserTypes.UPDATE_USER_FAILURE)
}

export const deleteUserAction = {
    deleteUserRequest: createAction(actionTypes.UserTypes.DELETE_USER_REQUEST),
    deleteUserSuccess: createAction(actionTypes.UserTypes.DELETE_USER_SUCCESS),
    deleteUserFailure: createAction(actionTypes.UserTypes.DELETE_USER_FAILURE)
}
export const userToAdminAction = {
    userToAdminRequest: createAction(actionTypes.UserTypes.USER_TO_ADMIN_REQUEST),
    userToAdminSuccess: createAction(actionTypes.UserTypes.USER_TO_ADMIN_SUCCESS),
    userToAdminFailure: createAction(actionTypes.UserTypes.USER_TO_ADMIN_FAILURE)
}

