import UserContext from "../context/UserContext"
import { useContext } from "react"
import { useState } from "react"

function ChangeUser() {
    const { user, setUser } = useContext(UserContext)
    const [newName, setNewName] = useState(user || '')

    return (
        <>
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
            />
            <button onClick={() => setUser(newName)}>Change User</button>
        </>
    )
}

export default ChangeUser