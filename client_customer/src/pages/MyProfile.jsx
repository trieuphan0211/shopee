import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';

import MyContext from '../contexts/MyContext';
import { User } from '../components';

export const MyProfile = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const emailInputRef = useRef();
    const usernameInputRef = useRef();
    const nameInputRef = useRef();
    const phoneInputRef = useRef();

    const [message, setMessage] = useState('');

    const context = useContext(MyContext);

    const [isUpdateButtonDisabled, setIsUpdateButtonDisabled] = useState(true);

    useEffect(() => {
        if (context.customer) {
            setEmail(context.customer.email);
            setUsername(context.customer.username);
            setName(context.customer.name);
            setPhone(context.customer.phone);
        } else {
            setEmail('');
            setUsername('');
            setName('');
            setPhone('');
        }
    }, [context.customer]);

    // event-handlers
    const btnUpdateClick = (e) => {
        e.preventDefault();

        const usernameVlaue = usernameInputRef.current.value;
        const nameValue = nameInputRef.current.value;
        const phoneValue = phoneInputRef.current.value;

        if (usernameVlaue && nameValue && phoneValue) {
            const customer = {
                username: usernameVlaue,
                name: nameValue,
                phone: phoneValue,
            };
            apiPutCustomer(context.customer._id, customer);
        } else {
            setMessage('Vui lòng  kiểm tra lại thông tin');
        }
    };
    // apis
    const apiPutCustomer = (id, customer) => {
        const config = { headers: { 'x-access-token': context.token } };
        axios.put('/api/customer/customers/' + id, customer, config).then((res) => {
            const result = res.data;
            if (result) {
                alert('Cập nhật thông tin thành công');
                context.setCustomer(result);

                // Reset input fields and remove 'disabled' class after successful update
                emailInputRef.current.value = '';
                usernameInputRef.current.value = '';
                nameInputRef.current.value = '';
                phoneInputRef.current.value = '';
                const inputs = [emailInputRef, usernameInputRef, nameInputRef, phoneInputRef];
                inputs.forEach((inputRef) => inputRef.current.classList.add('disabled'));
                setIsUpdateButtonDisabled(true);
            } else {
                alert('Cập nhật thông tin thất bại');
            }
        });
    };

    useEffect(() => {
        const inputs = [emailInputRef, usernameInputRef, nameInputRef, phoneInputRef];
        // Check if any input field is enabled (not having the class 'disabled')
        const anyInputEnabled = inputs.some((inputRef) => !inputRef.current.classList.contains('disabled'));
        setIsUpdateButtonDisabled(!anyInputEnabled);
    }, [email, username, name, phone]);

    const toggleSwitch = (inputRef) => {
        inputRef.current.classList.toggle('disabled');

        const inputs = [emailInputRef, usernameInputRef, nameInputRef, phoneInputRef];
        // Check if any input field is enabled (not having the class 'disabled')
        const anyInputEnabled = inputs.some((inputRef) => !inputRef.current.classList.contains('disabled'));
        setIsUpdateButtonDisabled(!anyInputEnabled);
    };

    return (
        <div className="app__container">
            <div className="grid wide">
                <div className="row sm-gutter app__content">
                    <User />
                    <div className="col l-10 m-9 c-9">
                        <div className="profile__contents">
                            <div className="profile__contents-header">
                                <h1 className="content-heading">Hồ Sơ Của Tôi</h1>
                                <div className="content-des">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
                            </div>
                            <div className="profile__info">
                                <form action className="profile__form">
                                    <div className="profile__form-detail">
                                        <div className="detail-label">Email</div>
                                        <input
                                            type="email"
                                            className="detail-input disabled"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            ref={emailInputRef}
                                        />
                                        <span className="detail-switch" onClick={() => toggleSwitch(emailInputRef)}>
                                            Thay đổi
                                        </span>
                                    </div>
                                    <div className="profile__form-detail">
                                        <div className="detail-label">Username</div>
                                        <input
                                            placeholder="Username"
                                            type="text"
                                            className="detail-input disabled"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            ref={usernameInputRef}
                                        />
                                        <span className="detail-switch" onClick={() => toggleSwitch(usernameInputRef)}>
                                            Thay đổi
                                        </span>
                                    </div>
                                    <div className="profile__form-detail">
                                        <div className="detail-label">Tên</div>
                                        <input
                                            placeholder="Tên người dùng"
                                            type="text"
                                            className="detail-input disabled"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            ref={nameInputRef}
                                        />
                                        <span className="detail-switch" onClick={() => toggleSwitch(nameInputRef)}>
                                            Thay đổi
                                        </span>
                                    </div>
                                    <div className="profile__form-detail">
                                        <div className="detail-label">Số Điện Thoại</div>
                                        <input
                                            placeholder="Số điện thoại"
                                            type="text"
                                            className="detail-input disabled"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            ref={phoneInputRef}
                                        />
                                        <span className="detail-switch" onClick={() => toggleSwitch(phoneInputRef)}>
                                            Thay đổi
                                        </span>
                                    </div>
                                    {message && <div className="auth-form__message">{message}</div>}
                                    <div className="profile__btn">
                                        <button
                                            className={`btn btn__update ${
                                                isUpdateButtonDisabled ? 'disabled' : 'btn--primary'
                                            }`}
                                            onClick={(e) => btnUpdateClick(e)}
                                            disabled={isUpdateButtonDisabled}
                                        >
                                            Cập Nhật
                                        </button>
                                    </div>
                                </form>

                                <div className="profile__avatar">
                                    <div className="avatar__upload">
                                        <img
                                            src={
                                                'https://user-images.githubusercontent.com/102477140/215768914-e3129899-6e50-4a33-bbaa-cc730c61a4b4.png'
                                            }
                                            alt=""
                                            className="avatar__upload-img"
                                        />
                                        <div className="custom-button">
                                            <button>Chọn Ảnh</button>
                                            <input type="file" accept="image/*" />
                                        </div>
                                        <div className="avatar__upload-text">
                                            <div style={{ marginTop: 12 }}>Dụng lượng file tối đa 1 MB</div>
                                            <div style={{ marginTop: 12 }}>Định dạng .jpg .jpeg .png</div>
                                        </div>
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
