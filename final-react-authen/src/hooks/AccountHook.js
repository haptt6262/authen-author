import { useDispatch } from 'react-redux'
import { AccountActions } from '../actions'

export const useAccount = () => {
    const dispatch = useDispatch()
    const handleLogin = (data) => { dispatch(AccountActions.LoginAction.loginRequest(data)) }
    const handleRegister = (data) => { dispatch(AccountActions.RegisterAction.registerRequest(data)) }
    return {
        handleLogin, handleRegister
    }
}