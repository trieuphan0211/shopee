import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { Home, Cart, Order, Login, Register, ProductDetail } from '../pages';

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
                    path: '/customer/order',
                    element: <Order />,
                },
                {
                    path: '/customer/productdetail',
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
            path: '*',
            //   element: <NotFound />,
        },
    ]);
    return routing;
};

export default Router;
