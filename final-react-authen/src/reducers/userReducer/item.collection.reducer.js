import { actionTypes } from '../../container'

const { UserTypes } = actionTypes
const INITIAL_STATE = {
    list: [],
    isFetching: false,
    isError: false,
    message: '',
}

export default function itemCollectionReducer(state = INITIAL_STATE, { type, payload }) {
    console.log('type', type)
    console.log('payload', payload)
    switch (type) {
        case UserTypes.FETCH_USERS_REQUEST:
            return {
                ...state,
                isFetching: true,
                isError: false,
                message: ''
            }
        case UserTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                list: payload.list,
                isError: false
            }
        case UserTypes.FETCH_USERS_FAILURE:
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