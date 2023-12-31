import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaStar, FaArrowDown, FaAngleLeft, FaAngleRight, FaRegHeart, FaCheck } from 'react-icons/fa6';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export const Content = ({ product, setProduct, setShow, setCurrentPage, currentPage }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const params = useParams();
    const apiGetNewroducts = () => {
        setShow(true);
        axios.get('/api/customer/products/new').then((res) => {
            const result = res.data;
            if (res.data) {
                setProduct(result);
                setShow(false);
            }
        });
    };
    const apiGetPopularProducts = () => {
        setShow(true);
        axios.get('/api/customer/products/hot').then((res) => {
            const result = res.data;
            if (res.data) {
                setProduct(result);
                setShow(false);
            }
        });
    };
    const risePriceProduct = () => {
        const len = product.length;
        const array = [...product];
        for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                if (array[j].price > array[j + 1].price) {
                    const temp = array[j].price;
                    array[j].price = array[j + 1].price;
                    array[j + 1].price = temp;
                }
            }
        }
        setProduct(array);
    };
    const reducePriceProduct = () => {
        const len = product.length;
        const array = [...product];
        for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                if (array[j].price < array[j + 1].price) {
                    const temp = array[j].price;
                    array[j].price = array[j + 1].price;
                    array[j + 1].price = temp;
                }
            }
        }
        setProduct(array);
    };
    useEffect(() => {
        if (!params.key) {
            apiGetNewroducts();
        }
    }, []);
    return (
        <div>
            <div className="home-filter hide-on-mobile-tablet">
                <span className="home-filter__label">{t('content1.sapxep')}</span>
                {/* <button className="home-filter__btn btn ">{t('content2.phobien')}</button> */}
                <button
                    className="home-filter__btn btn "
                    onClick={(e) => {
                        document.querySelector('.btn--primary')?.classList.remove('btn--primary');
                        e.currentTarget.classList.add('btn--primary');
                        apiGetNewroducts();
                    }}
                >
                    {t('content3.moi')}
                </button>
                <button
                    className="home-filter__btn btn"
                    onClick={(e) => {
                        document.querySelector('.btn--primary')?.classList.remove('btn--primary');
                        e.currentTarget.classList.add('btn--primary');
                        apiGetPopularProducts();
                    }}
                >
                    {t('content4.banchay')}
                </button>
                <div className="select-input">
                    <span className="select-input__label">{t('content5.gia')}</span>
                    {/*     <i className="select-input__icon fa-solid fa-angle-down" /> */}
                    <FaArrowDown className="select-input__icon" />
                    {/* List options */}
                    <ul className="select-input__list">
                        <li
                            className="select-input__item"
                            onClick={() => risePriceProduct()}
                            style={{ cursor: 'pointer' }}
                        >
                            <a href className="select-input__link">
                                {t('content6.giathap')}
                            </a>
                        </li>
                        <li
                            className="select-input__item"
                            onClick={() => reducePriceProduct()}
                            style={{ cursor: 'pointer' }}
                        >
                            <a href className="select-input__link">
                                {t('content7.giacao')}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="home-filter__page">
                    <span className="home-filter__page-num">
                        <span className="home-filter__page-current">{currentPage}</span>
                    </span>
                    <div className="home-filter__page-control">
                        <a
                            href
                            className="home-filter__page-btn home-filter__page-btn--disabled"
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            <FaAngleLeft className="home-filter__page-icon" />
                        </a>
                        <a href className="home-filter__page-btn" onClick={() => setCurrentPage(currentPage + 1)}>
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
                            <div
                                className="col l-2-4 m-4 c-6"
                                key={e._id}
                                onClick={() => {
                                    navigate('/products/' + e._id);
                                }}
                            >
                                <Link to="#" className="home-product-item">
                                    <img
                                        alt=""
                                        src={'data:image/jpg;base64,' + e.image}
                                        className="home-product-item__img"
                                        style={
                                            {
                                                // backgroundImage: 'url(./assets/img/balo_nu_mini.png)',
                                            }
                                        }
                                    />
                                    <h4 className="home-product-item__name">{e.name}</h4>
                                    <div className="home-product-item__price">
                                        {/* <span className="home-product-item__price-old">đ1.299.000</span> */}
                                        <span className="home-product-item__price-current">đ{e.price}.000</span>
                                    </div>
                                    <div className="home-product-item__action">
                                        <span className="home-product-item__like">
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
                                        <span className="home-product-item__origin-name">{t('content9.hn')}</span>
                                    </div>
                                    <div className="home-product-item__favourite">
                                        {/*             <i className="fa-solid fa-check" /> */}
                                        <FaCheck />
                                        <span>{t('content8.yeuthich')}</span>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
