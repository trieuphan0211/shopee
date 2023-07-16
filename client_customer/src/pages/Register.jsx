import React from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
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
                                <input type="text" className="auth-form__input" placeholder="Email của bạn" />
                            </div>
                            <div className="auth-form__group">
                                <input type="password" className="auth-form__input" placeholder="Mật khẩu của bạn" />
                            </div>
                            <div className="auth-form__group">
                                <input type="password" className="auth-form__input" placeholder="Nhập lại mật khẩu" />
                            </div>
                        </div>
                        <div className="auth-form__aside">
                            <p className="auth-form__policy-text">
                                Bằng việc đăng ký, bạn đã đồng ý với Shopee về
                                <a href className="auth-form__text-link">
                                    Điều khoản dịch vụ
                                </a>
                                &amp;
                                <a href className="auth-form__text-link">
                                    Chính sách bảo mật
                                </a>
                            </p>
                        </div>
                        <div className="auth-form__control">
                            <button className="btn btn--normal auth-form__control-back">TRỞ LẠI</button>
                            <button className="btn btn--primary">ĐĂNG KÝ</button>
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
        </div>
    );
};