import React, { useRef, useState } from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import { BiLogoFacebookCircle, BiLogoInstagram } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

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
                            <h3 className="auth-form__heading">{t('layout5.dangky')}</h3>
                            <Link to={'/customer/login'} className="none-decorate">
                                <span className="auth-form__switch-btn">{t('layout6.dangnhap')}</span>
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
                                {t('register1.argee')}{' '}
                                <a href className="auth-form__text-link">
                                    {t('register8.dicvu')}
                                </a>{' '}
                                &amp;{' '}
                                <a href className="auth-form__text-link">
                                    {t('footer12.baomat')}
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
                                {t('register4.back')}
                            </button>
                            <button
                                className="btn btn--primary"
                                onClick={(e) => {
                                    btnRegisterClick(e);
                                }}
                            >
                                {t('register5.dangky')}
                            </button>
                        </div>
                    </div>
                    <div className="auth-form__socials">
                        <a href className="auth-form__socials--facebook btn btn--size-s btn--with-icon">
                            <BiLogoFacebookCircle className="auth-form__socials-icon fa-brands fa-square-facebook" />
                            <span className="auth-form__socials-title">{t('register6.connectfb')}</span>
                        </a>
                        <a href className="auth-form__socials--google btn btn--size-s btn--with-icon">
                            <BiLogoInstagram className="auth-form__socials-icon fa-brands fa-google" />
                            <span className="auth-form__socials-title">{t('register7.connectgg')}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
