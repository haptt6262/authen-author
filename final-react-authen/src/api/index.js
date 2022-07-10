import { Helpers } from '../utils'
import ApiScheme from './scheme'

export const authApi = {
    login: Helpers.createApi(ApiScheme.AUTHEN.LOGIN),
    register: Helpers.createApi(ApiScheme.AUTHEN.REGISTER),
    logout: Helpers.createApi(ApiScheme.AUTHEN.LOGOUT),
    validateToken: Helpers.createApi(ApiScheme.AUTHEN.VALIDATE_TOKEN)
}

export const userApi = {
    fetchList: Helpers.createApi(ApiScheme.USERS.FETCH_LIST),
    create: Helpers.createApi(ApiScheme.USERS.CREATE),
    update: Helpers.createApiWithToken(ApiScheme.USERS.UPDATE),
    delete: Helpers.createApiWithToken(ApiScheme.USERS.DELETE),
    userToAdmin: Helpers.createApiWithToken(ApiScheme.USERS.USER_TO_ADMIN)
}