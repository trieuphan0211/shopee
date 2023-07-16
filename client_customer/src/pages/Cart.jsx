import React, { useState } from 'react';
import aoKhoatLong from '../assets/img/ao_khoac_long.png';

export function Cart() {
    const [numberProduct, setNummberProduct] = useState(1);
    return (
        <div className="myCart">
            <div className="myCart_info ">
                <div className="form-check mycart_info-product">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
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
                <div>
                    <div className="form-check mycart_info-product">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                        <img src={aoKhoatLong} style={{ width: '80px', height: '80px', marginRight: '10px' }} alt="" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Điện thoại Apple Iphone 12 64GB - Hàng chính hãng VNA
                        </label>
                    </div>

                    <div className="mycart_info-productInfo">
                        <div style={{ width: '30%' }}>₫ 2.130.000</div>
                        <div style={{ width: '30%' }}>
                            <div className="product_number">
                                <button onClick={() => setNummberProduct(numberProduct - 1)}>-</button>
                                <div>{numberProduct}</div>
                                <button onClick={() => setNummberProduct(numberProduct + 1)}>+</button>
                            </div>
                        </div>
                        <div style={{ width: '20%', color: 'red' }}>₫ {2130000 * numberProduct}</div>
                        <div style={{ width: '20%', cursor: 'pointer' }}>Xóa</div>
                    </div>
                </div>
                <div>
                    <div className="form-check mycart_info-product">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                        <img src={aoKhoatLong} style={{ width: '80px', height: '80px', marginRight: '10px' }} alt="" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Điện thoại Apple Iphone 12 64GB - Hàng chính hãng VNA
                        </label>
                    </div>

                    <div className="mycart_info-productInfo">
                        <div style={{ width: '30%' }}>₫ 2.130.000</div>
                        <div style={{ width: '30%' }}>
                            <div className="product_number">
                                <button onClick={() => setNummberProduct(numberProduct - 1)}>-</button>
                                <div>{numberProduct}</div>
                                <button onClick={() => setNummberProduct(numberProduct + 1)}>+</button>
                            </div>
                        </div>
                        <div style={{ width: '20%', color: 'red' }}>₫ {2130000 * numberProduct}</div>
                        <div style={{ width: '20%', cursor: 'pointer' }}>Xóa</div>
                    </div>
                </div>
            </div>
            <div className="myCart_buy">
                <div className="form-check mycart_buy-product">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Chọn tất cả (2)
                    </label>
                    <button>Xóa</button>
                </div>

                <div className="mycart_buy-productBuy">
                    <p>
                        Tổng thanh toán (0 sản phẩm):{' '}
                        <span style={{ color: 'red', fontSize: '24px' }}>₫ {2130000 * numberProduct} </span>
                    </p>
                    <button>Mua Hàng</button>
                </div>
            </div>
        </div>
    );
}
