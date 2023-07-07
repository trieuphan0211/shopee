import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { ListProduct, Search } from '../components/index';
import { Home } from '../pages';

const Router = () => {
    const routing = useRoutes([
        {
            path: '/customer',
            element: <MainLayout />,
            children: [
                {
                    path: '/customer/home',
                    element: <Home />,
                },
            ],
        },
        {
            path: '*',
            //   element: <NotFound />,
        },
    ]);
    return routing;
};

export default Router;
