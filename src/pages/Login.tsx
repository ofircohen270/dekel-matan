import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";

export function LoginPage() {
    const { login } = useAuth();
    const [userName, setUserName] = useState<string>()
    const navigate = useNavigate();
    const [params] = useSearchParams();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const onLoginClick = () => {
        if (userName) {
            login(userName)
            const navigteTo = params.get('to');
            if (navigteTo) {
                navigate(navigteTo);
            }

        };

        // loginWithServer
        //     .then(data => {
        //          login(data.userName)
        //  })
    }

    return (
        <>
            Login Page
            <div>
                <input type="text" value={userName} onChange={onChange} />
                <button onClick={onLoginClick}>Login</button>
            </div>
        </>
    )
}
