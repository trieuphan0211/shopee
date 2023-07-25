import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { Link, useParams } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs';
import MyContext from '../contexts/MyContext';

export const ProductDetail = () => {
    const context = useContext(MyContext);
    const [numberProduct, setNummberProduct] = useState(1);
    const [product, setProduct] = useState({});

    const params = useParams();

    console.log(context);
    useEffect(() => {
        apiGetProduct(params.id);
    }, [params.id]); // Only runs when 'params.id' changes);

    // apis
    const apiGetProduct = (id) => {
        axios.get('/api/customer/products/' + id).then((res) => {
            const result = res.data;
            setProduct(result);
        });
    };

    // event-handlers
    const btnAdd2CartClick = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior of the button click event

        if (numberProduct !== 0) {
            const mycart = context.mycart;
            // Check if a valid quantity is provided (greater than 0)
            // Get the cart items from the context
            console.log(mycart);
            const index = mycart.findIndex((x) => x.product._id === product._id); // Check if the product already exists in the cart
            
            if (index === -1) {
                // If the product is not found in the cart, add a new cart item
                const newItem = { product: product, quantity: numberProduct };
                context.setMycart([newItem]);
                console.log(mycart);
            } else {
                // If the product is already in the cart, increase its quantity

                mycart[index].quantity = numberProduct;
                console.log(mycart);
            }

            // Update the cart in the context with the modified mycart array
            // context.setMycart(mycart);
            // context.setNumberProduct(mycart.length);
            // Show a success message
            alert('Thêm vào giỏ hàng thành công');
            console.log(context);
        } else {
            // If an invalid quantity is provided (not a number or less than or equal to 0), show an error message
            alert('Số lượng không hợp lệ');
        }
    };

    return (
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
                                <span className="detail__quantity">Số Lượng</span>
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
                                <button className="btn btn--normal detail__button" onClick={(e) => btnAdd2CartClick(e)}>
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
