import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../hooks/UseAuth';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {

    const {user, loading} = UseAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56 text-center"></progress>
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;