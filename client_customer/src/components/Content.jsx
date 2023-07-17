import React from 'react';
import { FaStar, FaArrowDown, FaAngleLeft, FaAngleRight, FaRegHeart, FaCheck } from 'react-icons/fa6';
import anh1 from '../assets/img/ao_khoac_long.png';
export const Content = ({ product }) => {
    return (
        <div>
            <div className="home-filter hide-on-mobile-tablet">
                <span className="home-filter__label">Sắp xếp theo</span>
                <button className="home-filter__btn btn">Phổ Biến</button>
                <button className="home-filter__btn btn btn--primary">Mới Nhất</button>
                <button className="home-filter__btn btn">Bán Chạy</button>
                <div className="select-input">
                    <span className="select-input__label">Giá</span>
                    {/*     <i className="select-input__icon fa-solid fa-angle-down" /> */}
                    <FaArrowDown className="select-input__icon" />
                    {/* List options */}
                    <ul className="select-input__list">
                        <li className="select-input__item">
                            <a href className="select-input__link">
                                Giá thấp đến cao
                            </a>
                        </li>
                        <li className="select-input__item">
                            <a href className="select-input__link">
                                Giá cao đến thấp
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="home-filter__page">
                    <span className="home-filter__page-num">
                        <span className="home-filter__page-current">1</span>
                    </span>
                    <div className="home-filter__page-control">
                        <a href className="home-filter__page-btn home-filter__page-btn--disabled">
                            {/*  <i className="home-filter__page-icon fa-solid fa-angle-left" /> */}
                            <FaAngleLeft className="home-filter__page-icon" />
                        </a>
                        <a href className="home-filter__page-btn">
                            {/*         <i className="home-filter__page-icon fa-solid fa-angle-right" /> */}
                            <FaAngleRight className="home-filter__page-icon" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Home-Product */}
            <div className="home-product">
                <div className="row sm-gutter">
                    {product?.map((e) => {
                        return (
                            <div className="col l-2-4 m-4 c-6">
                                <a href="#" className="home-product-item">
                                    <img
                                        src={'data:image/jpg;base64,' + e.image}
                                        className="home-product-item__img"
                                        style={
                                            {
                                                // backgroundImage: 'url(./assets/img/balo_nu_mini.png)',
                                            }
                                        }
                                    />
                                    <h4 className="home-product-item__name">
                                        Balo Nữ mini Dáng Siêu Xinh Thiết Kế Thời Trang Đi Chơi Đi Học Phong Cách Trẻ
                                        Trung Cá Tính Giá Siêu Rẻ - BL012
                                    </h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">đ1.299.000</span>
                                        <span className="home-product-item__price-current">đ789.000</span>
                                    </div>
                                    <div className="home-product-item__action">
                                        {'{'}/* {/* Liked: home-product-item__like--liked */} */{'}'}
                                        <span className="home-product-item__like">
                                            {/*               <i className="home-product-item__like-icon-empty fa-regular fa-heart" /> */}
                                            <FaRegHeart className="home-product-item__like-icon-empty" />
                                            <i className="home-product-item__like-icon-fill fa-solid fa-heart" />
                                        </span>
                                        <div className="home-product-item__rating">
                                            <FaStar className="home-product-item__star-gold" />
                                            <FaStar className="home-product-item__star-gold" />
                                            <FaStar className="home-product-item__star-gold" />
                                            <FaStar className="home-product-item__star-gold" />
                                            <FaStar className="home-product-item__star-gold" />
                                        </div>
                                        <span className="home-product-item__sold">Đã bán 37</span>
                                    </div>
                                    <div className="home-product-item__origin">
                                        <span className="home-product-item__brand">MCM</span>
                                        <span className="home-product-item__origin-name">Hà Nội</span>
                                    </div>
                                    <div className="home-product-item__favourite">
                                        {/*             <i className="fa-solid fa-check" /> */}
                                        <FaCheck />
                                        <span>Yêu thích</span>
                                    </div>
                                    <div className="home-product-item__sale-off">
                                        <span className="home-product-item__sale-off-percent">20%</span>
                                        <span className="home-product-item__sale-off-label">GIẢM</span>
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
