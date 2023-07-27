import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const ForgotPassword = () => {
    const navigate = useNavigate();
    const email = useRef(null);
    const [message, setMessage] = useState('');

    // event-handlers
    const btnForgotPasswordClick = async (e) => {
        e.preventDefault();

        const emailValue = email.current.value;

        if (emailValue) {
            // Check if email is in the correct format
            if (!validateEmail(emailValue)) {
                setMessage('Vui lòng kiểm tra lại email của bạn.');
                return;
            }
            const account = {
                email: emailValue,
            };
            apiForgotPassword(account);
        }
    };

    // apis
    const apiForgotPassword = (account) => {
        axios.post('/api/customer/forgot-password', account).then((res) => {
            const result = res.data;
            alert(result.message);
            // Redirect to login page after sending token
            if (result.success) {
                navigate('/login');
            }
        });
    };
    return (
        <div className="auth-modal">
            {/* Forgot Password form */}
            <div className="auth-form">
                <div className="auth-form__container">
                    <div className="auth-form__header">
                        <h3 className="auth-form__heading">Quên Mật Khẩu</h3>
                    </div>
                    <div className="auth-form__form">
                        <div className="auth-form__group">
                            <input type="email" className="auth-form__input" placeholder="Email của bạn" ref={email} />
                        </div>
                        {message && <div className="auth-form__message">{message}</div>}
                        {/* <div className="auth-form__group">
                            <input type="text" className="auth-form__input" placeholder="Mã xác thực" />
                        </div> */}
                    </div>
                    <div className="auth-form__aside"></div>
                    <div className="auth-form__control" style={{ marginBottom: 40 }}>
                        <button
                            className="btn btn--normal auth-form__control-back"
                            onClick={() => {
                                navigate('/login');
                            }}
                        >
                            TRỞ LẠI
                        </button>
                        <button className="btn btn--primary" onClick={(e) => btnForgotPasswordClick(e)}>
                            GỬI TOKEN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
