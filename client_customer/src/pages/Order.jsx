import React, { useState } from 'react';
import avatar from '../assets/img/avartar.png';
import { GrEdit } from 'react-icons/gr';
import { FiUser } from 'react-icons/fi';
import { FaLock } from 'react-icons/fa6';
import { BiShoppingBag } from 'react-icons/bi';
import aoKhoatLong from '../assets/img/ao_khoac_long.png';

export const Order = () => {
    const [type, setType] = useState('all');
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
            <div className="order_product">
                <div className="order_product-header">
                    <div
                        className="header_sellected"
                        onClick={(e) => {
                            setType('all');
                            document.querySelector('.header_sellected').classList.remove('header_sellected');
                            e.currentTarget.classList.add('header_sellected');
                        }}
                    >
                        <p> Tất Cả </p>
                    </div>
                    <div
                        onClick={(e) => {
                            setType('accept');
                            document.querySelector('.header_sellected').classList.remove('header_sellected');
                            e.currentTarget.classList.add('header_sellected');
                        }}
                    >
                        <p> Chờ Xác Nhận </p>
                    </div>
                    <div>
                        <p> Chờ Lấy Hàng </p>
                    </div>
                    <div>
                        <p> Đang Giao </p>
                    </div>
                    <div>
                        <p> Đã Giao </p>
                    </div>
                    <div>
                        <p> Đã Huỷ </p>
                    </div>
                </div>
                {type === 'all' && (
                    <div className="order_product-item">
                        <div className="item_info">
                            <div className="item_info-name">
                                <img src={aoKhoatLong} />
                                <div>
                                    <p> ĐIỆN THOẠI OPPO A12 (3GB/32GB) - HÀNG CHÍNH HÃNG </p>
                                    <p> x1 </p>
                                </div>
                            </div>
                            <p style={{ color: '#ee4d2d', fontSize: '14px', margin: '0' }}> ₫2.590.000 </p>
                        </div>
                        <div className="item_price">
                            Tổng giá tiền{' '}
                            <span style={{ color: '#ee4d2d', fontSize: '20px', marginLeft: '16px' }}> ₫2.590.000 </span>
                        </div>
                    </div>
                )}
                {type === 'accept' && (
                    <div className="order_product-item">
                        {/* <div className="item_info">
                        <div className="item_info-name">
                            <img src={aoKhoatLong} />
                            <div>
                                <p> ĐIỆN THOẠI OPPO A12 (3GB/32GB) - HÀNG CHÍNH HÃNG </p>
                                <p> x1 </p>
                            </div>
                        </div>
                        <p style={{ color: '#ee4d2d', fontSize: '14px', margin: '0' }}> ₫2.590.000 </p>
                    </div>
                    <div className="item_price">
                        Tổng giá tiền{' '}
                        <span style={{ color: '#ee4d2d', fontSize: '20px', marginLeft: '16px' }}> ₫2.590.000 </span>
                    </div> */}
                    </div>
                )}
            </div>
        </div>
    );
};
