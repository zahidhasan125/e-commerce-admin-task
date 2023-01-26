import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Products from '../pages/Products/Products';
import Cart from '../pages/Cart/Cart';
import PrivateRoute from './PrivateRoute';
import Orders from '../pages/Orders/Orders';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/signup',
                    element: <SignUp />
                },
                {
                    path: '/products',
                    element: <Products />
                },
                {
                    path: '/cart',
                    element: <PrivateRoute><Cart /></PrivateRoute>
                },
                {
                    path: '/orders',
                    element: <PrivateRoute><Orders /></PrivateRoute>
                }
            ]
        }
    ]
);


const Routes = () => {
    return (
        <div>
            
        </div>
    );
};

export default Routes;