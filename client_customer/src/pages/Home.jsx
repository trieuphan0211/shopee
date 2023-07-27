import React, { useEffect, useMemo, useState } from 'react';
import { Content, ListProducts } from '../components';
import axios from 'axios';
import { Loading } from '../components';
import Modal from 'react-bootstrap/Modal';
import Pagination from '../components/pagination/Pagination';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const Home = () => {
    const [categories, setCategories] = useState();
    const [product, setProduct] = useState([]);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
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
        navigate('/customer/home');
        document.querySelector('.btn--primary')?.classList.remove('btn--primary');
        setShow(true);
        axios.get('/api/customer/products/all').then((res) => {
            const result = res.data;
            if (res.data) {
                setProduct(result);
                setShow(false);
            }
        });
    };
    const apiGetProductsByCatID = (cid) => {
        navigate('/customer/home');
        document.querySelector('.btn--primary')?.classList.remove('btn--primary');
        setShow(true);
        axios.get('/api/customer/products/category/' + cid).then((res) => {
            const result = res.data;
            if (res.data !== []) {
                setProduct(result);
                setShow(false);
            }
        });
    };

    useEffect(() => {
        apiGetCategories();
    }, []);
    useEffect(() => {
        if (params.key) {
            apiGetProductsBySearch(params.key);
        }
    }, [params.key]);
    // apis
    const apiGetProductsBySearch = (keyword) => {
        setShow(true);
        axios.get('/api/customer/products/search/' + keyword).then((res) => {
            const result = res.data;
            if (res.data) {
                setProduct(result);
                setShow(false);
            }
        });
    };

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
                                    <Link
                                        onClick={(e) => apiGetAllProducts(e)}
                                        className="mobile-category__link"
                                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                    >
                                        Tất cả
                                    </Link>
                                </li>
                                {categories?.map((element, index) => {
                                    return (
                                        <li
                                            key={index}
                                            onClick={(e) => apiGetProductsByCatID(element._id, e)}
                                            className="mobile-category__item"
                                        >
                                            <Link
                                                className="mobile-category__link"
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                {element.name}
                                            </Link>
                                        </li>
                                    );
                                })}
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
