import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useNavigate, useParams } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs';
import MyContext from '../contexts/MyContext';
import { Loading } from '../components';
import Modal from 'react-bootstrap/Modal';

import { useTranslation } from 'react-i18next';

export const ProductDetail = () => {
    const context = useContext(MyContext);
    const [numberProduct, setNummberProduct] = useState(1);
    const [product, setProduct] = useState({});
    const [mycart, setMycart] = useState(context.mycart);
    const params = useParams();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        apiGetProduct(params.id);
    }, [params.id]); // Only runs when 'params.id' changes);

    useEffect(() => {
        if (product.category) {
            apiGetProductsByCatID(product.category._id);
        }
    }, [product]);

    // apis
    const apiGetProduct = (id) => {
        setShow(true);
        axios.get('/api/customer/products/' + id).then((res) => {
            const result = res.data;

            if (res.data) {
                setProduct(result);
                setShow(false);
            }
        });
    };

    const apiGetProductsByCatID = (cid) => {
        setShow(true);
        axios.get('/api/customer/products/category/' + cid).then((res) => {
            const result = res.data;
            if (res.data !== []) {
                setCategories(result.filter((e) => e._id !== product._id));
                setShow(false);
            }
        });
    };

    // event-handlers
    const btnAdd2CartClick = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior of the button click event

        if (numberProduct !== 0) {
            const index = mycart.findIndex((x) => x.product._id === product._id); // Check if the product already exists in the cart

            if (index === -1) {
                // If the product is not found in the cart, add a new cart item
                const newItem = { product: product, quantity: numberProduct };
                context.setMycart([...mycart, newItem]);
            } else {
                // If the product is already in the cart, increase its quantity
                const updatedmycart = [...mycart];
                updatedmycart[index].quantity = numberProduct;
                context.setMycart(updatedmycart);
            }

            alert(t('product5.addspthanhcong'));
            console.log(context);
        } else {
            // If an invalid quantity is provided (not a number or less than or equal to 0), show an error message
            alert(t('product6.addspfail'));
        }
    };

    // Slider
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true, // Enable pause on hover
    };

    return (
        <>
            <div>
                <div className="app__container container__main ">
                    <div className="grid wide">
                        <div className="row sm-gutter app__content">
                            <div className="col l-6 m-0 c-0">
                                <div className="product-detail__image">
                                    <img
                                        src={'data:image/jpg;base64,' + product.image}
                                        width="500px"
                                        height="500px"
                                        alt=""
                                        className="product-detail__image-img"
                                    />
                                </div>
                            </div>
                            <div className="col l-6 m-12 c-12">
                                <div className="product-detail__content">
                                    <h1 className="product-detail__content-name">{product.name}</h1>
                                </div>
                                <div className="product-detail__price">
                                    <span className="detail__price">{product.price}.000đ</span>
                                </div>
                                <div className="product-detail__quantity">
                                    <span className="detail__quantity">{t('product1.soluong')}</span>
                                    <div className="product_number">
                                        <button onClick={() => setNummberProduct(numberProduct - 1)}>-</button>
                                        <div>{numberProduct}</div>
                                        <button onClick={() => setNummberProduct(numberProduct + 1)}>+</button>
                                    </div>
                                    {/* <input
                                    className="detail__number"
                                    type="number"
                                    min="1"
                                    max="99"
                                    placeholder="0"
                                    value={txtQuantity}
                                        onChange={(e) => {
                                            setTxtQuantity(e.target.value);
                                    }}
                                /> */}
                                </div>
                                <div className="product-detail__button">
                                    <button
                                        className="btn btn--normal detail__button"
                                        onClick={(e) => btnAdd2CartClick(e)}
                                    >
                                        <BsCartPlus className="detail__icon" />
                                        {t('product2.themcart')}
                                    </button>
                                    <button className="btn btn--primary detail__button detail__button-hover">
                                        {t('product3.buy')}
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
                                <span className="product-detail__title">{t('product4.splienquan')}</span>
                            </div>
                            <Slider {...sliderSettings} className="col l-12 m-12 c-12 product-container">
                                {categories?.map((e) => {
                                    return (
                                        <div className="home-product-item" key={e._id}>
                                            <div
                                                className="home-product-item__img"
                                                onClick={() => {
                                                    navigate('/products/' + e._id);
                                                }}
                                            >
                                                <img
                                                    src={'data:image/jpg;base64,' + e.image}
                                                    alt=""
                                                    className="home-product-item__img"
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                />
                                            </div>
                                            <h4 className="home-product-item__name">{e.name}</h4>
                                            <div className="home-product-item__price">
                                                <span className="home-product-item__price-current">đ{e.price}.000</span>
                                            </div>

                                            <div className="home-product-item__origin">
                                                <span className="home-product-item__brand">MCM</span>
                                                <span className="home-product-item__origin-name">
                                                    {t('content9.hn')}
                                                </span>
                                            </div>
                                            <div className="home-product-item__favourite">
                                                <i className="fa-solid fa-check" />
                                                <span>{t('content8.yeuthich')}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <>
                <Modal show={show} style={{ backgroundColor: 'rgba(0,0,0,.7)' }}>
                    <Loading />
                </Modal>
            </>
        </>
    );
};
