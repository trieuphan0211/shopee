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
        console.log(param.pathname);
        switch (param.pathname) {
            case '/home':
                document.title = 'Welcome Shopii VLU';
                break;
            case '/cart':
                document.title = 'Giỏ hàng';
                break;
            case '/user/order':
                document.title = 'Sản phẩm đã mua';
                break;
            case '/user/change-password':
                document.title = 'Thay đổi mật khẩu';
                break;
            case '/user/profile':
                document.title = 'Thông tin cá nhân';
                break;
            case '/products/*':
                document.title = 'Chi tiết sản phẩm';
                break;
            case '/login':
                document.title = 'Đăng nhập';
                break;
            case '/register':
                document.title = 'Đăng ký';
                break;
            case '/active':
                document.title = 'Kích hoạt tài khoản';
                break;
            case '/forgot-password':
                document.title = 'Quên mật khẩu';
                break;
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
