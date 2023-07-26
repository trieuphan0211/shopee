import React from 'react';
import { Link } from 'react-router-dom';
import { FaList } from 'react-icons/fa6';

export const ListProducts = ({ categories, apiGetProductsByCatID, apiGetAllProducts }) => {
    return (
        <nav className="category">
            <h3 className="category__heading" style={{ display: 'flex', alignItems: 'center' }}>
                <FaList className="category__heading-icon" />
                {/* <i className="category__heading-icon fa-solid fa-list" /> */}
                Danh Mục
            </h3>
            <ul className="category-list">
                <li onClick={() => apiGetAllProducts()}>Tất cả</li>
                {categories?.map((element, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => apiGetProductsByCatID(element._id)}
                            className="category-item category-item-active"
                        >
                            <Link to="" className="category-item__link">
                                {element.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
