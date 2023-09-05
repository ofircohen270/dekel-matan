import { createContext, useContext, useEffect, useState } from "react";

type AuthContextValue = {
    user: string | null;
    login: (user: string) => void;
    logout: () => void;
}

const defaultValue = {
    user: null,
    login: (user: string) => {},
    logout: () => {},
}

export const AuthContext = createContext<AuthContextValue>(defaultValue);

export const useAuth = () => (
    useContext(AuthContext)
);

export const AuthProvider = ({ children }: {children: React.ReactNode} ) => {
    const [user, setUser] = useState<string | null>(null);

    const login = (newUser: string) => {
        setUser(newUser);
    }
    
    const logout = () => {
        setUser(null);
    }

    const contextValue = {
        user,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            { children }
        </AuthContext.Provider>
    )
}

