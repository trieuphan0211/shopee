import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BiLogoFacebookCircle, BiLogoInstagram } from 'react-icons/bi';

import MyContext from '../contexts/MyContext';

export const Login = () => {
    const username = useRef(null);
    const password = useRef(null);
    const context = useContext(MyContext);
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    // event-handlers
    const btnLoginClick = (e) => {
        e.preventDefault();

        // Use the local state values directly
        if (username.current.value && password.current.value) {
            const account = { username: username.current.value, password: password.current.value };
            apiLogin(account);
        } else {
            setMessage('Vui lòng nhập đầy đủ thông tin');
        }
    };

    // Define apiLogin as an arrow function
    const apiLogin = (account) => {
        axios.post('/api/customer/login', account).then((res) => {
            const result = res.data;
            if (result.success === true) {
                // Assuming you have the "context" object available to set the token and customer
                context.setToken(result.token);
                context.setCustomer(result.customer);
                // Assuming you have access to "props" to navigate to the home page
                navigate('/customer/home');
            } else {
                alert(result.message);
            }
        });
    };

    return (
        <div className="auth-modal">
            {/* Login form */}
            <div className="auth-form">
                <div className="auth-form__container">
                    <div className="auth-form__header">
                        <h3 className="auth-form__heading">Đăng nhập</h3>
                        <Link to={'/customer/register/'} className="none-decorate">
                            <span className="auth-form__switch-btn">Đăng ký</span>
                        </Link>
                    </div>
                    <div className="auth-form__form">
                        <div className="auth-form__group">
                            <input type="text" className="auth-form__input" placeholder="Username" ref={username} />
                        </div>
                        <div className="auth-form__group">
                            <input
                                type="password"
                                className="auth-form__input"
                                placeholder="Mật khẩu của bạn"
                                ref={password}
                            />
                        </div>
                    </div>
                    {message && <div className="auth-form__message">{message}</div>}
                    <div className="auth-form__aside">
                        <div className="auth-form__help">
                            <Link
                                to={'/customer/forgot-password'}
                                className="auth-form__help-link auth-form__help-link-fogot"
                            >
                                Quên mật khẩu
                            </Link>
                            <span className="auth-form__help-separate" />
                            <a href className="auth-form__help-link">
                                Cần trợ giúp?
                            </a>
                        </div>
                    </div>
                    <div className="auth-form__control">
                        <button
                            className="btn btn--normal auth-form__control-back"
                            onClick={() => {
                                navigate('/customer/home');
                            }}
                        >
                            TRỞ LẠI
                        </button>
                        <button
                            onClick={(e) => {
                                btnLoginClick(e);
                            }}
                            className="btn btn--primary"
                        >
                            ĐĂNG NHẬP
                        </button>
                    </div>
                </div>
                <div className="auth-form__socials">
                    <a href className="auth-form__socials--facebook btn btn--size-s btn--with-icon">
                        <BiLogoFacebookCircle className="auth-form__socials-icon fa-brands fa-square-facebook" />
                        <span className="auth-form__socials-title">Kết nối với Facebook</span>
                    </a>
                    <a href className="auth-form__socials--google btn btn--size-s btn--with-icon">
                        <BiLogoInstagram className="auth-form__socials-icon fa-brands fa-google" />
                        <span className="auth-form__socials-title">Kết nối với Google</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
