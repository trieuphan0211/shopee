import React from 'react';
import { FaList } from 'react-icons/fa6';

export const ListProducts = () => {
    return (
        <nav className="category">
            <h3 className="category__heading" style={{ display: 'flex', alignItems: 'center' }}>
                <FaList className="category__heading-icon" />
                {/* <i className="category__heading-icon fa-solid fa-list" /> */}
                Danh Mục
            </h3>
            <ul className="category-list">
                <li className="category-item category-item-active">
                    <a href="#" className="category-item__link">
                        Balo Nữ
                    </a>
                </li>
                <li className="category-item">
                    <a href="#" className="category-item__link">
                        Áo Khoác
                    </a>
                </li>
                <li className="category-item">
                    <a href="#" className="category-item__link">
                        Dép
                    </a>
                </li>
            </ul>
        </nav>
    );
};
