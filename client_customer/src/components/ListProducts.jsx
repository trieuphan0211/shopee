import React from 'react';
import { FaList } from 'react-icons/fa6';

export const ListProducts = ({ categories, apiGetProductsByCatID }) => {
    return (
        <nav className="category">
            <h3 className="category__heading" style={{ display: 'flex', alignItems: 'center' }}>
                <FaList className="category__heading-icon" />
                {/* <i className="category__heading-icon fa-solid fa-list" /> */}
                Danh Mục
            </h3>
            <ul className="category-list">
                {categories?.map((element, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => apiGetProductsByCatID(element._id)}
                            className="category-item category-item-active"
                        >
                            <a className="category-item__link">{element.name}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
