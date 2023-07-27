import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Footer, Header, Loading } from '../components';

const MainLayout = () => {
    const param = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        // activeSub
        if (param.pathname === '/') {
            navigate('/home');
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
