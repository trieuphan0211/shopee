import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { MyProfile, Order } from '../components/index';
import { Home, Cart, Login, Register, User } from '../pages';

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
                {
                    path: '/customer/cart',
                    element: <Cart />,
                },
                {
                    path: '/customer/user',
                    element: <User />,
                    children: [
                        {
                            path: '/customer/user/order',
                            element: <Order />,
                        },
                        {
                            path: '/customer/user/profile',
                            element: <MyProfile />,
                        },
                    ],
                },
            ],
        },
        {
            path: '/customer/login',
            children: [{ path: '/customer/login', element: <Login /> }],
        },
        {
            path: '/customer/register',
            children: [{ path: '/customer/register', element: <Register /> }],
        },
        {
            path: '*',
            //   element: <NotFound />,
        },
    ]);
    return routing;
};

export default Router;
