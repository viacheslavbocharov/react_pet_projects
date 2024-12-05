import React from 'react'
import { useState } from 'react'

export default function Login() {
    const [data, setData] =
        useState({
            username: '',
            password: ''
        })

    function handleFormSumbit(event) {
        event.preventDefault()

        console.log(data)
        alert(JSON.stringify(data))
    }

    function handleInputChange(text, name) {
        setData({ ...data, [name]: text })
    }

    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSumbit}>
                <label>Username:
                    <input
                        type="text"
                        onChange={(event) => handleInputChange(event.target.value, 'username')}
                        value={data.username} />
                </label>
                <label>Password:
                    <input
                        type="password"
                        onChange={(event) => handleInputChange(event.target.value, 'password')}
                        value={data.password} />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    )
}
