import React, { useRef, useState } from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import { BiLogoFacebookCircle, BiLogoInstagram } from 'react-icons/bi';

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const Register = () => {
    const navigate = useNavigate();
    const email = useRef();
    const username = useRef();
    const password = useRef();
    const [message, setMessage] = useState('');

    // event-handlers
    const btnRegisterClick = (e) => {
        e.preventDefault();

        const emailValue = email.current.value;
        const usernameValue = username.current.value;
        const passwordValue = password.current.value;
        const nameValue = usernameValue;
        const phoneValue = '';
        const imageValue = '';

        if (emailValue && usernameValue && passwordValue) {
            // Check if email is in the correct format
            if (!validateEmail(emailValue)) {
                setMessage('Vui lòng nhập một địa chỉ email hợp lệ.');
                return;
            }
            const account = {
                email: emailValue,
                username: usernameValue,
                password: passwordValue,
                name: nameValue,
                phone: phoneValue,
                image: imageValue,
            };
            apiRegister(account);
        } else {
            setMessage('Vui lòng nhập đầy đủ thông tin');
        }
    };

    // apis
    const apiRegister = (account) => {
        axios.post('/api/customer/register', account).then((res) => {
            const result = res.data;
            alert(result.message);
            if (result.success === true) {
                navigate('/customer/active');
            }
        });
    };

    return (
        <div>
            {/* Register form */}
            <div className="auth-modal">
                <div className="auth-form">
                    <div className="auth-form__container">
                        <div className="auth-form__header">
                            <h3 className="auth-form__heading">Đăng ký</h3>
                            <Link to={'/customer/login'} className="none-decorate">
                                <span className="auth-form__switch-btn">Đăng nhập</span>
                            </Link>
                        </div>
                        <div className="auth-form__form">
                            <div className="auth-form__group">
                                <input
                                    type="email"
                                    className="auth-form__input"
                                    placeholder="Email của bạn"
                                    ref={email}
                                />
                            </div>
                            <div className="auth-form__group">
                                <input
                                    type="text"
                                    className="auth-form__input"
                                    placeholder="Username của bạn"
                                    ref={username}
                                />
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
                            <p className="auth-form__policy-text">
                                Bằng việc đăng ký, bạn đã đồng ý với Shopee về{' '}
                                <a href className="auth-form__text-link">
                                    Điều khoản dịch vụ
                                </a>{' '}
                                &amp;{' '}
                                <a href className="auth-form__text-link">
                                    Chính sách bảo mật
                                </a>
                            </p>
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
                                className="btn btn--primary"
                                onClick={(e) => {
                                    btnRegisterClick(e);
                                }}
                            >
                                ĐĂNG KÝ
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
        </div>
    );
};
