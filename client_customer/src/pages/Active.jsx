import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Active = () => {
    const navigate = useNavigate();
    const idRef = useRef();
    const tokenRef = useRef();

    // event-handlers
    const btnActiveClick = (e) => {
        e.preventDefault();

        const idValue = idRef.current.value;
        const tokenValue = tokenRef.current.value;

        if (idValue && tokenValue) {
            apiActive(idValue, tokenValue);
        } else {
            alert('Vui lòng nhập đầy đủ thông tin');
        }
    };
    // apis
    const apiActive = (id, token) => {
        const body = { id: id, token: token };
        axios.post('/api/customer/active', body).then((res) => {
            const result = res.data;
            if (result) {
                alert('Kích hoạt tài khoản thành công!');
                navigate('/customer/login');
            } else {
                alert('Kích hoạt tài khoản thất bại!');
            }
        });
    };

    return (
        <div className="auth-modal">
            {/* Active form */}
            <div className="auth-form">
                <div className="auth-form__container">
                    <div className="auth-form__header">
                        <h3 className="auth-form__heading">Active Tài Khoản</h3>
                        <Link to={'/customer/register/'} className="none-decorate">
                            <span className="auth-form__switch-btn">Đăng ký</span>
                        </Link>
                    </div>
                    <div className="auth-form__form">
                        <div className="auth-form__group">
                            <input type="text" className="auth-form__input" placeholder="ID của bạn" ref={idRef} />
                        </div>
                        <div className="auth-form__group">
                            <input
                                type="text"
                                className="auth-form__input"
                                placeholder="Token của bạn"
                                ref={tokenRef}
                            />
                        </div>
                    </div>
                    <div className="auth-form__aside"></div>
                    <div className="auth-form__control" style={{ marginBottom: 40 }}>
                        <button
                            className="btn btn--normal auth-form__control-back"
                            onClick={() => {
                                navigate('/customer/home');
                            }}
                        >
                            TRỞ LẠI
                        </button>
                        <button className="btn btn--primary" onClick={(e) => btnActiveClick(e)}>
                            KÍCH HOẠT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
