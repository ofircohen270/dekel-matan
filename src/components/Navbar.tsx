import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
    const { user, logout } = useAuth();

    const onLogoutClick = () => {
        logout();
    }

    return (
        <nav>
            {user && (
                <>
                    <div>Hello {user}</div>
                    <button onClick={onLogoutClick}>Logout</button>
                </>
            )}
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/user">User</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}