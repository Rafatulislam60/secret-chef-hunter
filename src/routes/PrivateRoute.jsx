import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const privateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
   if(loading){
    return <p className="text-3xl font-bold text-center">Loading</p>
   }

    if(user) {
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace ></Navigate>
};

export default privateRoute;