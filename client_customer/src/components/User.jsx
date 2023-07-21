import React from 'react';
import { Link } from 'react-router-dom';

import { GrEdit } from 'react-icons/gr';
import { FiUser } from 'react-icons/fi';
import { FaLock } from 'react-icons/fa6';
import { BiShoppingBag } from 'react-icons/bi';
import { Outlet } from 'react-router-dom';

import avatar from '../assets/img/avartar.png';

export const User = () => {
    return (
        <div className="col l-2 m-3 c-3">
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
                            <Link to="/customer/user/profile" className="none-decorate">
                                <FiUser style={{ marginRight: 0 }} /> Tài Khoản Của Tôi {''}
                            </Link>
                        </div>
                        <div>
                            <Link to="#" className="none-decorate">
                                <FaLock style={{ marginRight: 0 }} /> Đổi Mật Khẩu {''}
                            </Link>
                        </div>
                        <div className="sellected">
                            <Link to="/customer/user/order" className="none-decorate">
                                <BiShoppingBag style={{ marginRight: 0 }} /> Đơn Mua
                            </Link>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
};
