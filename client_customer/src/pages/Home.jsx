import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Content, ListProducts } from '../components';
import axios from 'axios';
import { Loading } from '../components';
import Modal from 'react-bootstrap/Modal';
import Pagination from '../components/pagination/Pagination';
import { MyProvider } from '../contexts';
import MyContext from '../contexts/MyContext';

export const Home = () => {
    const [categories, setCategories] = useState();
    const [product, setProduct] = useState([]);
    const [show, setShow] = useState(false);
    const context = useContext(MyContext);
    const apiGetCategories = () => {
        document.querySelector('.btn--primary')?.classList.remove('btn--primary');
        axios.get('/api/customer/categories').then((res) => {
            const result = res.data;
            if (res.data) {
                setCategories(result);
            }
        });
    };
    let PageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return product.slice(firstPageIndex, lastPageIndex);
    }, [product, currentPage]);
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
    // useEffect(() => {
    //     const token = sessionStorage.getItem('token');
    //     if (token) {
    //         // Assuming you have the "context" object available to set the token
    //         context.setToken(token);

    //         // Fetch user data if needed and set the customer in context
    //         // For this example, we assume the user data is already stored in context.
    //     }
    // }, []);

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
                            <Content
                                product={currentTableData}
                                setProduct={setProduct}
                                setShow={setShow}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                            />
                        </div>
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={product.length}
                            pageSize={PageSize}
                            onPageChange={(page) => setCurrentPage(page)}
                        />
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
