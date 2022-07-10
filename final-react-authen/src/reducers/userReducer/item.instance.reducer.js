import { actionTypes } from '../../container'

const { UserTypes } = actionTypes
const INITIAL_STATE = {
    item: {
        id: null
    },
    isFetching: false,
    isError: false,
    message: ''
}

export default function itemInstanceReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case UserTypes.USER_TO_ADMIN_REQUEST:
        case UserTypes.DELETE_USER_REQUEST:
        case UserTypes.UPDATE_USER_REQUEST:
            return {
                ...state,
                isFetching: true,
                isError: false,
                message: ''
            }
        case UserTypes.USER_TO_ADMIN_FAILURE:
        case UserTypes.DELETE_USER_FAILURE:
        case UserTypes.UPDATE_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                isError: true,
                message: payload.message
            }
        case UserTypes.USER_TO_ADMIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                // item: payload.item
            }
        case UserTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                // item: payload.item
            }
        case UserTypes.UPDATE_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case UserTypes.CLEAR_USER:
            return INITIAL_STATE
        default:
            return state
    }
}