import { useDispatch, useSelector } from "react-redux"
import { UserActions } from '../actions'

export const useUser = () => {
    const dispatch = useDispatch()
    const list = useSelector(state => state.userCollection.list)
    const isFetching = useSelector(state => state.userCollection.isFetching)
    const isError = useSelector(state => state.userCollection.isError)
    const message = useSelector(state => state.userCollection.message)

    const handleFetchList = () => dispatch(UserActions.fetchListUsersAction.fetchListRequest())
    const updateUser = (data) => dispatch(UserActions.updateUserAction.updateUserRequest(data))
    const deleteUser = (data) => dispatch(UserActions.deleteUserAction.deleteUserRequest(data))
    const userToAdmin = (data) => dispatch(UserActions.userToAdminAction.userToAdminRequest(data))

    return {
        list,
        isFetching,
        isError,
        message,
        handleFetchList,
        updateUser,
        deleteUser,
        userToAdmin
    }
}