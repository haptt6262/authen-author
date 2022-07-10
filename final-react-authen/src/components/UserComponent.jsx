import React, { useEffect, useState } from 'react'
import { useUser } from '../hooks'

export default function Home() {
    const {
        isError,
        isFetching,
        list,
        message,
        handleFetchList,
        updateUser, deleteUser, userToAdmin
    } = useUser()

    const [data, setData] = useState({
        id: '',
        username: '',
    })
    const role = window.localStorage.getItem('role')

    useEffect(() => {
        handleFetchList()
    }, [])

    if (isFetching) {
        return (
            <p>Loading</p>
        )
    }
    if (isError) {
        return (
            <p>{message}</p>
        )
    }
    let ListItem = []
    ListItem = list && list.map((item, key) => {
        return (
            <tr key={key}>
                <th>{key + 1}</th>
                <th>{item.username}</th>
                <th>{item.roles.role}</th>
                <th>
                    <button onClick={() => {
                        if (role === 'admin') {
                            setData({ ...data, id: item._id, username: item.username })
                        } else {
                            alert('You do not have permission to access this request')
                        }
                    }}>SELECT</button>
                </th>
                <th>
                    <button onClick={() => {
                        if (role === 'admin') {
                            deleteUser({ id: item._id })
                        } else {
                            alert('You do not have permission to access this request')
                        }
                    }}>DELETE</button>
                </th>
                <th>
                    <button onClick={() => {
                        if (role === 'admin') {
                            userToAdmin({ id: item._id })
                        } else {
                            alert('You do not have permission to access this request')
                        }
                    }}>User to Admin</button>
                </th>
            </tr>
        )
    })

    return (
        <>
            <div>Homepage</div>
            <input value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />
            <button onClick={() => { updateUser(data) }}>UPDATE</button>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Username</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {ListItem}
                </tbody>
            </table>
        </>
    )
}