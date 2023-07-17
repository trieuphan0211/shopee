import React, { useState } from 'react';
import avatar from '../assets/img/avartar.png';
import { GrEdit } from 'react-icons/gr';
import { FiUser } from 'react-icons/fi';
import { FaLock } from 'react-icons/fa6';
import { BiShoppingBag } from 'react-icons/bi';
import { Outlet } from 'react-router-dom';

export const User = () => {
    return (
        <div className="order">
            <div className="order_info">
                <div className="oder_info_name">
                    <img src={avatar} className="order_info-img" alt="" />
                    <div className="order_info-edit">
                        <p>Đức Long</p>
                        <p>
                            <GrEdit /> Sửa Hồ Sơ{' '}
                        </p>
                    </div>
                </div>

                <div className="oder_list">
                    <div>
                        <FiUser /> Tài Khoản Của Tôi {''}
                    </div>
                    <div>
                        <FaLock /> Đổi Mật Khẩu {''}
                    </div>
                    <div className="sellected">
                        <BiShoppingBag /> Đơn Mua
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
};
