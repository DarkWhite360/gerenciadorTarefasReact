import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({isAutenticated}){
    if(!isAutenticated){
        return <Navigate to='/login' replace />
    }
    return <Outlet />
}