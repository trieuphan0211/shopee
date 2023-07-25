import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ForgotPassword = () => {
    const navigate = useNavigate();
    const email = useRef(null);
    const [message, setMessage] = useState('');
    
    // event-handlers
    const btnForgotPasswordClick = async (e) => {};

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
                                navigate('/customer/login');
                            }}
                        >
                            TRỞ LẠI
                        </button>
                        <button className="btn btn--primary" onClick={(e) => btnForgotPasswordClick(e)}>
                            GỬI MÃ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
