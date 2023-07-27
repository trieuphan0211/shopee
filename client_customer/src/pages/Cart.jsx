import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../contexts/MyContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { Loading } from '../components';

export function Cart() {
    const context = useContext(MyContext);
    const [mycart, setMycart] = useState(context.mycart);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    // select checked All
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        if (isCheck.length !== 0) {
            setTotal(
                isCheck.reduce(
                    (accumulator, currentValue) => accumulator + currentValue.product.price * currentValue.quantity,
                    0,
                ),
            );
        } else {
            setTotal(0);
        }
    }, [isCheck]);
    const handleSelectAll = (e) => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(context.mycart.map((e) => e));

        if (isCheckAll) {
            setIsCheck([]);
        }
    };
    const handleClick = (element, e) => {
        const { id, checked } = element.target;
        setIsCheck([...isCheck, e]);
        console.log(checked);
        if (!checked) {
            setIsCheck(isCheck.filter((item) => item.product._id !== id));
        }
    };
    const lnkCheckoutClick = () => {
        if (window.confirm('ARE YOU SURE?')) {
            if (isCheck.length > 0) {
                if (context.customer) {
                    apiCheckout(total, isCheck, context.customer);
                } else {
                    navigate('/login');
                }
            } else {
                alert('Your cart is empty');
            }
        }
    };
    const apiCheckout = (total, items, customer) => {
        const body = { total: total, items: items, customer: customer };
        const config = { headers: { 'x-access-token': context.token } };
        axios.post('/api/customer/checkout', body, config).then((res) => {
            setShow(true);
            const result = res.data;
            if (result) {
                setShow(false);
                alert('Đơn hàng đã được đặt');
                context.setMycart([]);
                setIsCheck([]);
            } else {
                setShow(false);
                alert('Đơn hàng đã bị lỗi làm ơn kiểm tra lại');
            }
        });
    };
    return (
        <div className="myCart">
            <div className="myCart_info ">
                <div className="form-check mycart_info-product">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                        onChange={handleSelectAll}
                        checked={isCheckAll}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Sản Phẩm
                    </label>
                </div>

                <div className="mycart_info-productInfo">
                    <div style={{ width: '30%' }}>Đơn giá</div>
                    <div style={{ width: '30%' }}>Số Lượng</div>
                    <div style={{ width: '20%' }}>Số Tiền</div>
                    <div style={{ width: '20%' }}>Thao Tác</div>
                </div>
            </div>
            <div className="myCart_product ">
                {context.mycart.map((e, index) => {
                    return (
                        <div>
                            <div className="form-check mycart_info-product">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id={e.product._id}
                                    onChange={(element) => handleClick(element, e)}
                                    checked={isCheck.includes(e)}
                                />
                                <img
                                    src={'data:image/jpg;base64,' + e.product.image}
                                    style={{ width: '80px', height: '80px', marginRight: '10px' }}
                                    alt=""
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    {e.product.name}
                                </label>
                            </div>

                            <div className="mycart_info-productInfo">
                                <div style={{ width: '30%' }}>₫ {e.product.price}.000</div>
                                <div style={{ width: '30%' }}>
                                    <div className="product_number">
                                        <button
                                            onClick={() => {
                                                const updatedmycart = [...mycart];
                                                updatedmycart[index].quantity = e.quantity - 1;
                                                context.setMycart(updatedmycart);
                                                setMycart(updatedmycart);
                                            }}
                                        >
                                            -
                                        </button>
                                        <div>{e.quantity}</div>
                                        <button
                                            onClick={() => {
                                                const updatedmycart = [...mycart];
                                                updatedmycart[index].quantity = e.quantity + 1;
                                                context.setMycart(updatedmycart);
                                                setMycart(updatedmycart);
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div style={{ width: '20%', color: 'red' }}>₫ {e.product.price * e.quantity}000</div>
                                <div
                                    style={{ width: '20%', cursor: 'pointer' }}
                                    onClick={() => {
                                        const updatedmycart = [...mycart];
                                        updatedmycart.splice(index, 1);
                                        setIsCheck(isCheck.filter((item) => item.product._id !== e.product._id));
                                        context.setMycart(updatedmycart);
                                        setMycart(updatedmycart);
                                    }}
                                >
                                    Xóa
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="myCart_buy">
                <div className="form-check mycart_buy-product">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                        onChange={handleSelectAll}
                        checked={isCheckAll}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Chọn tất cả ({context.mycart.length})
                    </label>
                    <button>Xóa</button>
                </div>

                <div className="mycart_buy-productBuy">
                    <p>
                        Tổng thanh toán ({isCheck.length} sản phẩm):{' '}
                        <span style={{ color: 'red', fontSize: '24px' }}>₫ {total}000 </span>
                    </p>
                    <button onClick={lnkCheckoutClick}>Mua Hàng</button>
                </div>
            </div>
            <>
                <Modal show={show} style={{ backgroundColor: 'rgba(0,0,0,.7)' }}>
                    <Loading />
                </Modal>
            </>
        </div>
    );
}
