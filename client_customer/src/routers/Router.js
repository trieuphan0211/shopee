import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import {
    Home,
    Cart,
    Login,
    Register,
    MyProfile,
    Order,
    ProductDetail,
    Active,
    ChangePassword,
    ForgotPassword,
} from '../pages';

const Router = () => {
    const routing = useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/home',
                    element: <Home />,
                },
                {
                    path: '/home/:key',
                    element: <Home />,
                },
                {
                    path: '/cart',
                    element: <Cart />,
                },
                {
                    path: '/user/order',
                    element: <Order />,
                },
                {
                    path: '/user/profile',
                    element: <MyProfile />,
                },
                {
                    path: '/user/change-password',
                    element: <ChangePassword />,
                },
                {
                    path: '/products/:id',
                    element: <ProductDetail />,
                },
            ],
        },
        {
            path: '/login',
            children: [{ path: '/login', element: <Login /> }],
        },
        {
            path: '/register',
            children: [{ path: '/register', element: <Register /> }],
        },
        {
            path: '/active',
            children: [{ path: '/active', element: <Active /> }],
        },
        {
            path: '/forgot-password',
            children: [{ path: '/forgot-password', element: <ForgotPassword /> }],
        },
        {
            path: '*',
            //   element: <NotFound />,
        },
    ]);
    return routing;
};

export default Router;
