import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    if (loading) {
        return <progress className="progress w-full mx-auto"></progress>
    }
    if (!user) {
        return navigate('/login');
    }
    return children;
};

export default PrivateRoute;