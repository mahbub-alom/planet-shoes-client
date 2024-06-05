import React from 'react';
import useAuth from '../hook/useAuth';
import LoadingSpinner from '../Pages/Shared/LoadingSpinner/LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth()

    if (loading) {
        return <LoadingSpinner />
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;