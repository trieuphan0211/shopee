import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
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
                            <input type="text" className="auth-form__input" placeholder="Email của bạn" />
                        </div>
                        <div className="auth-form__group">
                            <input type="password" className="auth-form__input" placeholder="Mật khẩu của bạn" />
                        </div>
                    </div>
                    <div className="auth-form__aside">
                        <div className="auth-form__help">
                            <a href className="auth-form__help-link auth-form__help-link-fogot">
                                Quên mật khẩu
                            </a>
                            <span className="auth-form__help-separate" />
                            <a href className="auth-form__help-link">
                                Cần trợ giúp?
                            </a>
                        </div>
                    </div>
                    <div className="auth-form__control">
                        <button className="btn btn--normal auth-form__control-back">TRỞ LẠI</button>
                        <button className="btn btn--primary">ĐĂNG NHẬP</button>
                    </div>
                </div>
                <div className="auth-form__socials">
                    <a href className="auth-form__socials--facebook btn btn--size-s btn--with-icon">
                        <i className="auth-form__socials-icon fa-brands fa-square-facebook" />
                        <span className="auth-form__socials-title">Kết nối với Facebook</span>
                    </a>
                    <a href className="auth-form__socials--google btn btn--size-s btn--with-icon">
                        <i className="auth-form__socials-icon fa-brands fa-google" />
                        <span className="auth-form__socials-title">Kết nối với Google</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
