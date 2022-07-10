import React, { useState } from 'react'
import { useAccount } from '../hooks'

const RegisterComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const { handleRegister } = useAccount()

    const USER_REGEX = /\S+@\S+\.\S+/;
    // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const PWD_REGEX = /^.{6,}$/

    const handleUsername = (e) => {
        const usernameTxt = e.target.value;
        setUsername(usernameTxt);
        if (USER_REGEX.test(usernameTxt) === true) {
            setUsernameError(null)
        } else {
            setUsername("")
            setUsernameError("Invalid username!")
        }
    };
    const handlePassword = (e) => {
        const passwordTxt = e.target.value;
        setPassword(passwordTxt);
        if (PWD_REGEX.test(passwordTxt) === true) {
            setPasswordError("")
        } else {
            setPassword("")
            setPasswordError("Invalid password!")
        }
    };
    const handleSubmit = () => {
        handleRegister({ username: username, password: password })
    }
    return (
        <div>
            <div><input placeholder="username" onChange={handleUsername} /></div>
            {
                usernameError && (
                    <div style={{ marginTop: "5px", color: "red" }}>
                        {usernameError}
                    </div>
                )
            }
            <div><input placeholder="password" onChange={handlePassword} /></div>
            {passwordError && (
                <div style={{ marginTop: "5px", color: "red" }}>
                    {passwordError}
                </div>
            )}
            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default RegisterComponent