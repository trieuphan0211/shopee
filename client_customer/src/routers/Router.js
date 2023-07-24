import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { Home, Cart, Login, Register, MyProfile, Order, ProductDetail, Active, ChangePassword } from '../pages';

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
                    path: '/customer/user/order',
                    element: <Order />,
                },
                {
                    path: '/customer/user/profile',
                    element: <MyProfile />,
                },
                {
                    path: '/customer/user/change-password',
                    element: <ChangePassword />,
                },
                {
                    path: '/customer/products/:id',
                    element: <ProductDetail />,
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
            path: '/customer/active',
            children: [{ path: '/customer/active', element: <Active /> }],
        },
        {
            path: '*',
            //   element: <NotFound />,
        },
    ]);
    return routing;
};

export default Router;
