import { takeLatest, put } from 'redux-saga/effects'
import { UserActions } from '../actions'
import { actionTypes } from '../container'
import { userApi } from '../api'

function* handleFetchListUsers({ payload }) {
    try {
        const res = yield userApi.fetchList()
        yield put(UserActions.fetchListUsersAction.fetchListSuccess({
            list: res.listUser,
        }))
    } catch (error) {
        yield put(UserActions.fetchListUsersAction.fetchListFailure({
            message: error.message
        }))
    }
}
function* handleUpdateUser({ payload }) {
    try {
        yield userApi.update({ id: payload.id }, null, { username: payload.username })
        yield put(UserActions.updateUserAction.updateUserSuccess())
        yield put(UserActions.fetchListUsersAction.fetchListRequest())
    } catch (error) {
        yield put(UserActions.updateUserAction.updateUserFailure({
            message: error.message
        }))
    }
}
function* handleDeleteUser({ payload }) {
    try {
        // console.log("payload delete user: ", payload);
        yield userApi.delete({ id: payload.id }, null, null)
        yield put(UserActions.deleteUserAction.deleteUserSuccess())
        yield put(UserActions.fetchListUsersAction.fetchListRequest())
    } catch (error) {
        yield put(UserActions.deleteUserAction.deleteUserFailure({
            message: error.message
        }))
    }
}
function* handleUserToAdmin({ payload }) {
    try {
        console.log("payload delete user: ", payload);
        yield userApi.userToAdmin({ id: payload.id }, null, null)
        yield put(UserActions.userToAdminAction.userToAdminSuccess())
        yield put(UserActions.fetchListUsersAction.fetchListRequest())
    } catch (error) {
        yield put(UserActions.userToAdminAction.userToAdminFailure({
            message: error.message
        }))
    }
}

const userSaga = [
    takeLatest(actionTypes.UserTypes.FETCH_USERS_REQUEST, handleFetchListUsers),
    takeLatest(actionTypes.UserTypes.UPDATE_USER_REQUEST, handleUpdateUser),
    takeLatest(actionTypes.UserTypes.DELETE_USER_REQUEST, handleDeleteUser),
    takeLatest(actionTypes.UserTypes.USER_TO_ADMIN_REQUEST, handleUserToAdmin),
]

export default userSaga;