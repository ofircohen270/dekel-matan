import { createContext, useContext, useState } from "react";

const initalValue = {
    user: null,
    login: (user: string) => {},
    logout: () => {},
}

type LoginContextType = {
    user: null | string,
    login: (user: string) => void,
    logout: () => void,
}

const LoginContext = createContext<LoginContextType>(initalValue);

export const useLogin = () => (
    useContext(LoginContext)
)

type LoginProviderProps = {
    children: React.ReactNode;
}

export const LoginProvider = ({ children }: LoginProviderProps) => {
    const [user, setUser] = useState<string | null>('ofir');

    const login = (newUser: string) => {
        setUser(newUser);
    }

    const logout = () => {
        setUser(null)
    }

    const value = {
        user,
        login,
        logout,
    }

    return (
        <LoginContext.Provider value={value}>
            { children }
        </LoginContext.Provider>
    )
}