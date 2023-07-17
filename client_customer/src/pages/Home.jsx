import React, { useEffect, useState } from 'react';
import { Content, ListProducts, Pagination } from '../components';
import axios from 'axios';

export const Home = () => {
    const [categories, setCategories] = useState();
    const [product, setProduct] = useState();
    console.log(product);
    const apiGetCategories = () => {
        axios.get('/api/customer/categories').then((res) => {
            const result = res.data;
            setCategories(result);
        });
    };
    const apiGetNewProducts = () => {
        axios.get('/api/customer/products/new').then((res) => {
            const result = res.data;
            console.log(result);
            setProduct(result);
        });
    };
    const apiGetProductsByCatID = (cid) => {
        axios.get('/api/customer/products/category/' + cid).then((res) => {
            const result = res.data;
            setProduct(result);
        });
    };
    useEffect(() => {
        apiGetCategories();
        apiGetNewProducts();
    }, []);
    return (
        <div className="app__container">
            <div className="grid wide">
                <div className="row sm-gutter app__content">
                    <div className="col l-2 m-0 c-0">
                        <ListProducts categories={categories} apiGetProductsByCatID={apiGetProductsByCatID} />
                    </div>
                    <div className="col l-10 m-12 c-12">
                        <nav className="mobile-category">
                            <ul className="mobile-category__list">
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">
                                        Dụng cụ &amp; Thiết bị tiện ích
                                    </a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">
                                        Dụng cụ &amp; Thiết bị tiện ích
                                    </a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">
                                        Dụng cụ &amp; Thiết bị tiện ích
                                    </a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">
                                        Dụng cụ &amp; Thiết bị tiện ích
                                    </a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">
                                        Dụng cụ &amp; Thiết bị tiện ích
                                    </a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">
                                        Dụng cụ &amp; Thiết bị tiện ích
                                    </a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">
                                        Dụng cụ &amp; Thiết bị tiện ích
                                    </a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">
                                        Dụng cụ &amp; Thiết bị tiện ích
                                    </a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">
                                        Dụng cụ &amp; Thiết bị tiện ích
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="home-product">
                            <Content product={product} />
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
};
