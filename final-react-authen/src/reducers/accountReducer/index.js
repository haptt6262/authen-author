import { actionTypes } from '../../container'

const { AccountTypes } = actionTypes
const INITIAL_STATE = {
    // listUser: [],
    isFetching: false,
    isError: false,
    message: '',
}

export default function accountReducer(state = INITIAL_STATE, { type, payload }) {
    console.log('type', type)
    console.log('payload', payload)
    switch (type) {
        case AccountTypes.LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                isError: false,
                message: ''
            }
        case AccountTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                // listUser: payload.listUser,
                isError: false
            }
        case AccountTypes.LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                isError: true,
                message: payload.message
            }

        case AccountTypes.REGISTER_REQUEST:
            return {
                ...state,
                isFetching: true,
                isError: false,
                message: ''
            }
        case AccountTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                // listUser: payload.listUser,
                isError: false
            }
        case AccountTypes.REGISTER_FAILURE:
            return {
                ...state,
                isFetching: false,
                isError: true,
                message: payload.message
            }
        default:
            return state
    }
}