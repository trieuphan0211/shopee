import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Footer, Header, Loading } from '../components';

const MainLayout = () => {
    const param = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        // activeSub
        console.log(param.pathname);
        if (param.pathname === '/customer' || param.pathname === '/customer/') {
            navigate('/customer/home');
        }
    }, [param.pathname]);
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
