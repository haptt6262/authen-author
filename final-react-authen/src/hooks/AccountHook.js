import { useDispatch, useSelector } from 'react-redux'
import { AccountActions } from '../actions'
import { useNavigate } from 'react-router-dom'

export const useAccount = () => {
    const dispatch = useDispatch()
    // const status = useSelector(state => state.account.status)
    // const message = useSelector(state => state.account.message)


    // const navigate = useNavigate()
    // if (status === 'success') {
    //     console.log("da vao day: ");
    //     // navigate('/login')
    // }
    const handleLogin = (data) => { dispatch(AccountActions.LoginAction.loginRequest(data)) }
    const handleRegister = (data) => { dispatch(AccountActions.RegisterAction.registerRequest(data)) }
    return {
        handleLogin, handleRegister
    }
}