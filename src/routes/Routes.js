import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main />,
            children: [
                
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