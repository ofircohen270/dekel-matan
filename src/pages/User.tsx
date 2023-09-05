import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export function UserPage() {
    const { user } = useContext(AuthContext);

    return (
        <>
            User Page
            <div>User - {user}</div>
        </>
    )
}