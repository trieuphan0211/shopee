import React, { useEffect, useState } from 'react';
import { Content, ListProducts, Pagination } from '../components';
import axios from 'axios';
import { Loading } from '../components';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, useParams } from 'react-router-dom';

export const Home = () => {
    const [categories, setCategories] = useState();
    const [product, setProduct] = useState();
    const [show, setShow] = useState(false);

    const apiGetCategories = () => {
        document.querySelector('.btn--primary')?.classList.remove('btn--primary');
        axios.get('/api/customer/categories').then((res) => {
            const result = res.data;
            if (res.data) {
                setCategories(result);
            }
        });
    };
    const apiGetAllProducts = () => {
        document.querySelector('.btn--primary')?.classList.remove('btn--primary');
        setShow(true);
        axios.get('/api/customer/products/all').then((res) => {
            const result = res.data;
            if (res.data) {
                console.log(res.data);
                setProduct(result);
                setShow(false);
            }
        });
    };
    const apiGetProductsByCatID = (cid) => {
        document.querySelector('.btn--primary')?.classList.remove('btn--primary');
        setShow(true);
        axios.get('/api/customer/products/category/' + cid).then((res) => {
            const result = res.data;
            if (res.data !== []) {
                console.log(res.data);
                setProduct(result);
                setShow(false);
            }
        });
    };
    useEffect(() => {
        apiGetCategories();
        apiGetAllProducts();
    }, []);
    return (
        <div className="app__container">
            <div className="grid wide">
                <div className="row sm-gutter app__content">
                    <div className="col l-2 m-0 c-0">
                        <ListProducts
                            apiGetAllProducts={apiGetAllProducts}
                            categories={categories}
                            apiGetProductsByCatID={apiGetProductsByCatID}
                        />
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
                            <Content product={product} setProduct={setProduct} setShow={setShow} />
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
            <>
                <Modal show={show} style={{ backgroundColor: 'rgba(0,0,0,.7)' }}>
                    <Loading />
                </Modal>
            </>
        </div>
    );
};
