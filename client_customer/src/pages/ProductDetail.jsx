import React from 'react';
import { Link } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs';

export const ProductDetail = () => {
    return (
        <div>
            <div className="app__container container__main ">
                <div className="grid wide">
                    <div className="row sm-gutter app__content">
                        <div className="col l-6 m-0 c-0">
                            <div className="product-detail__image">
                                <img
                                    src="https://user-images.githubusercontent.com/102477140/215768914-e3129899-6e50-4a33-bbaa-cc730c61a4b4.png"
                                    alt=""
                                    className="product-detail__image-img"
                                />
                            </div>
                        </div>
                        <div className="col l-6 m-12 c-12">
                            <div className="product-detail__content">
                                <h1 className="product-detail__content-name">Hahahahahahahahahah</h1>
                            </div>
                            <div className="product-detail__price">
                                <span className="detail__price">100.000đ</span>
                            </div>
                            <div className="product-detail__quantity">
                                <span className="detail__quantity">Số Lượng</span>
                                <input className="detail__number" type="number" min="1" max="99" />
                            </div>
                            <div className="product-detail__button">
                                <button className="btn btn--normal detail__button">
                                    <BsCartPlus className="detail__icon" />
                                    Thêm Vào Giỏ Hàng
                                </button>
                                <button className="btn btn--primary detail__button detail__button-hover">
                                    Mua Ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="app__container container__hint">
                <div className="grid wide">
                    <div className="row sm-gutter app__content">
                        <div className="col l-12 m-12 c-12">
                            <span className="product-detail__title">Các sản phẩm liên quan khác</span>
                        </div>
                        <div className="col l-2-4 m-4 c-6">
                            <Link to="#" className="home-product-item">
                                <div
                                    className="home-product-item__img"
                                    style={{
                                        backgroundImage:
                                            'url(https://user-images.githubusercontent.com/102477140/215768914-e3129899-6e50-4a33-bbaa-cc730c61a4b4.png',
                                    }}
                                />
                                <h4 className="home-product-item__name">
                                    Balo Nữ mini Dáng Siêu Xinh Thiết Kế Thời Trang Đi Chơi Đi Học Phong Cách Trẻ Trung
                                    Cá Tính Giá Siêu Rẻ - BL012
                                </h4>
                                <div className="home-product-item__price">
                                    <span className="home-product-item__price-current">đ789.000</span>
                                </div>

                                <div className="home-product-item__origin">
                                    <span className="home-product-item__brand">MCM</span>
                                    <span className="home-product-item__origin-name">Hà Nội</span>
                                </div>
                                <div className="home-product-item__favourite">
                                    <i className="fa-solid fa-check" />
                                    <span>Yêu thích</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
