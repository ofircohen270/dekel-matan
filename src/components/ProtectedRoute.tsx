import { Navigate, useLocation } from "react-router-dom";
import React from "react";
import { useAuth } from "../context/AuthContext";

type ProtectedRouteProps = {
    element: React.ReactElement | null;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        return (
            <Navigate
                to={`/login?to=${encodeURIComponent(location.pathname)}`}
                replace
            />
        );
    }

    return element;
};
