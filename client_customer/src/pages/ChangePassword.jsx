import React, { useContext, useRef, useState } from 'react';
import axios from 'axios';

import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

import { User } from '../components';
import MyContext from '../contexts/MyContext';

export const ChangePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const context = useContext(MyContext);
    const passwordInputRef = useRef();

    // event-handlers
    const btnChangePasswordClick = (e) => {
        e.preventDefault();

        const passwordValue = passwordInputRef.current.value;

        if (passwordValue) {
            const account = {
                password: passwordValue,
            };
            apiPutCustomer(context.customer._id, account);
        } else {
            alert('Vui lòng nhập mật khẩu mới');
        }
        // Reset input values
        setPassword(''); // Set the password state to an empty string
        setNewPassword(''); // Set the newPassword state to an empty string
    };

    // apis
    const apiPutCustomer = (id, customer) => {
        const config = { headers: { 'x-access-token': context.token } };
        axios.put('/api/customer/customers/' + id, customer, config).then((res) => {
            const result = res.data;
            if (result) {
                alert('Đổi mật khẩu thành công');
                context.setCustomer(result);
            } else {
                alert('Đổi mật khẩu thất bại');
            }
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const toggleNewPasswordVisibility = () => {
        setShowNewPassword((prevShowNewPassword) => !prevShowNewPassword);
    };

    return (
        <div className="app__container">
            <div className="grid wide">
                <div className="row sm-gutter app__content">
                    <User />
                    <div className="col l-10 m-9 c-9">
                        <div className="pwd__contents">
                            <div className="pwd__contents-header">
                                <h1 className="pwd__content-heading">Đổi Mật Khẩu</h1>
                                <div className="pwd__content-des">
                                    Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
                                </div>
                            </div>
                            <div className="pwd__info">
                                <div className="pwd__form">
                                    <div className="pwd__form-detail">
                                        <span className="pwd__detail-label">Mật Khẩu Cũ</span>
                                        <div className="pwd-input-container">
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="Mật khẩu mới"
                                                className="pwd__detail-input"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <button className="toggle-password-btn" onClick={togglePasswordVisibility}>
                                                {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="pwd__form-detail">
                                        <span className="pwd__detail-label">Mật Khẩu Mới</span>
                                        <div className="pwd-input-container">
                                            <input
                                                type={showNewPassword ? 'text' : 'password'}
                                                placeholder="Mật khẩu mới"
                                                className="pwd__detail-input"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                ref={passwordInputRef}
                                            />
                                            <button
                                                className="toggle-password-btn"
                                                onClick={toggleNewPasswordVisibility}
                                            >
                                                {showNewPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="pwd__form-detail">
                                        <button
                                            className="btn btn--primary detail-btn"
                                            onClick={(e) => {
                                                btnChangePasswordClick(e);
                                            }}
                                        >
                                            Cập Nhật
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
