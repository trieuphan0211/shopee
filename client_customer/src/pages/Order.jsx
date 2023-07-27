import React, { useContext, useEffect, useState } from 'react';
import { User } from '../components';
import axios from 'axios';
import MyContext from '../contexts/MyContext';

export const Order = () => {
    const context = useContext(MyContext);
    const [type, setType] = useState('all');
    const [order, setOrder] = useState([]);
    console.log(order);
    const apiGetOrdersByCustID = (cid) => {
        const config = { headers: { 'x-access-token': context.token } };
        axios.get('/api/customer/orders/customer/' + cid, config).then((res) => {
            const result = res.data;
            if (result) {
                setOrder(result);
            }
        });
    };
    useEffect(() => {
        if (context.customer) {
            apiGetOrdersByCustID(context.customer._id);
        }
    }, [context.customer]);
    return (
        <div className="app__container">
            <div className="grid wide">
                <div className="row sm-gutter app__content">
                    <User />
                    <div className="col l-10 m-9 c-9">
                        <div className="order_product">
                            <div className="order_product-header">
                                <div
                                    className="header_sellected"
                                    onClick={(e) => {
                                        setType('all');
                                        document
                                            .querySelector('.header_sellected')
                                            .classList.remove('header_sellected');
                                        e.currentTarget.classList.add('header_sellected');
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <p> Tất Cả </p>
                                </div>
                                <div
                                    onClick={(e) => {
                                        setType('accept');
                                        document
                                            .querySelector('.header_sellected')
                                            .classList.remove('header_sellected');
                                        e.currentTarget.classList.add('header_sellected');
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <p> Chờ Xác Nhận </p>
                                </div>
                                <div
                                    onClick={(e) => {
                                        setType('getItems');
                                        document
                                            .querySelector('.header_sellected')
                                            .classList.remove('header_sellected');
                                        e.currentTarget.classList.add('header_sellected');
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <p> Chờ Lấy Hàng </p>
                                </div>
                                <div
                                    onClick={(e) => {
                                        setType('giao');
                                        document
                                            .querySelector('.header_sellected')
                                            .classList.remove('header_sellected');
                                        e.currentTarget.classList.add('header_sellected');
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <p> Đang Giao </p>
                                </div>
                                <div
                                    onClick={(e) => {
                                        setType('danhan');
                                        document
                                            .querySelector('.header_sellected')
                                            .classList.remove('header_sellected');
                                        e.currentTarget.classList.add('header_sellected');
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <p> Đã Giao </p>
                                </div>
                                <div
                                    onClick={(e) => {
                                        setType('cancel');
                                        document
                                            .querySelector('.header_sellected')
                                            .classList.remove('header_sellected');
                                        e.currentTarget.classList.add('header_sellected');
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <p> Đã Huỷ </p>
                                </div>
                            </div>
                            {type === 'all' &&
                                order.map((item) => {
                                    return (
                                        <div className="order_product-item">
                                            {item.items.map((e) => {
                                                return (
                                                    <div className="item_info">
                                                        <div className="item_info-name">
                                                            <img
                                                                alt=""
                                                                src={'data:image/jpg;base64,' + e.product.image}
                                                            />
                                                            <div>
                                                                <p>{e.product.name}</p>
                                                                <p> x{e.quantity} </p>
                                                            </div>
                                                        </div>
                                                        <p style={{ color: '#ee4d2d', fontSize: '14px', margin: '0' }}>
                                                            {' '}
                                                            ₫{e.product.price}.000{' '}
                                                        </p>
                                                    </div>
                                                );
                                            })}
                                            <div className="item_price">
                                                Tổng giá tiền{' '}
                                                <span
                                                    style={{ color: '#ee4d2d', fontSize: '20px', marginLeft: '16px' }}
                                                >
                                                    {' '}
                                                    ₫{item.total}000{' '}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            {type === 'accept' &&
                                order.map((item) => {
                                    if (item.status === 'PENDING') {
                                        return (
                                            <div className="order_product-item">
                                                {item.items.map((e) => {
                                                    return (
                                                        <div className="item_info">
                                                            <div className="item_info-name">
                                                                <img
                                                                    alt=""
                                                                    src={'data:image/jpg;base64,' + e.product.image}
                                                                />
                                                                <div>
                                                                    <p>{e.product.name}</p>
                                                                    <p> x{e.quantity} </p>
                                                                </div>
                                                            </div>
                                                            <p
                                                                style={{
                                                                    color: '#ee4d2d',
                                                                    fontSize: '14px',
                                                                    margin: '0',
                                                                }}
                                                            >
                                                                {' '}
                                                                ₫{e.product.price}.000{' '}
                                                            </p>
                                                        </div>
                                                    );
                                                })}
                                                <div className="item_price">
                                                    Tổng giá tiền{' '}
                                                    <span
                                                        style={{
                                                            color: '#ee4d2d',
                                                            fontSize: '20px',
                                                            marginLeft: '16px',
                                                        }}
                                                    >
                                                        {' '}
                                                        ₫{item.total}000{' '}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            {type === 'getItems' &&
                                order.map((item) => {
                                    if (item.status === 'APPROVED') {
                                        return (
                                            <div className="order_product-item">
                                                {item.items.map((e) => {
                                                    return (
                                                        <div className="item_info">
                                                            <div className="item_info-name">
                                                                <img
                                                                    alt=""
                                                                    src={'data:image/jpg;base64,' + e.product.image}
                                                                />
                                                                <div>
                                                                    <p>{e.product.name}</p>
                                                                    <p> x{e.quantity} </p>
                                                                </div>
                                                            </div>
                                                            <p
                                                                style={{
                                                                    color: '#ee4d2d',
                                                                    fontSize: '14px',
                                                                    margin: '0',
                                                                }}
                                                            >
                                                                {' '}
                                                                ₫{e.product.price}.000{' '}
                                                            </p>
                                                        </div>
                                                    );
                                                })}
                                                <div className="item_price">
                                                    Tổng giá tiền{' '}
                                                    <span
                                                        style={{
                                                            color: '#ee4d2d',
                                                            fontSize: '20px',
                                                            marginLeft: '16px',
                                                        }}
                                                    >
                                                        {' '}
                                                        ₫{item.total}000{' '}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            {type === 'cancel' &&
                                order.map((item) => {
                                    if (item.status === 'CANCELED') {
                                        return (
                                            <div className="order_product-item">
                                                {item.items.map((e) => {
                                                    return (
                                                        <div className="item_info">
                                                            <div className="item_info-name">
                                                                <img
                                                                    alt=""
                                                                    src={'data:image/jpg;base64,' + e.product.image}
                                                                />
                                                                <div>
                                                                    <p>{e.product.name}</p>
                                                                    <p> x{e.quantity} </p>
                                                                </div>
                                                            </div>
                                                            <p
                                                                style={{
                                                                    color: '#ee4d2d',
                                                                    fontSize: '14px',
                                                                    margin: '0',
                                                                }}
                                                            >
                                                                {' '}
                                                                ₫{e.product.price}.000{' '}
                                                            </p>
                                                        </div>
                                                    );
                                                })}
                                                <div className="item_price">
                                                    Tổng giá tiền{' '}
                                                    <span
                                                        style={{
                                                            color: '#ee4d2d',
                                                            fontSize: '20px',
                                                            marginLeft: '16px',
                                                        }}
                                                    >
                                                        {' '}
                                                        ₫{item.total}000{' '}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
