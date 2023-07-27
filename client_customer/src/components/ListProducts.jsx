import React from 'react';
import { Link } from 'react-router-dom';
import { FaList } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

export const ListProducts = ({ categories, apiGetProductsByCatID, apiGetAllProducts }) => {
    const { t } = useTranslation();
    return (
        <nav className="category">
            <h3 className="category__heading" style={{ display: 'flex', alignItems: 'center' }}>
                <FaList className="category__heading-icon" />
                {/* <i className="category__heading-icon fa-solid fa-list" /> */}
                {t('list1.danhmuc')}
            </h3>
            <ul className="category-list">
                <li className="category-item category-item-active" onClick={() => apiGetAllProducts()}>
                    <Link to="" className="category-item__link">
                        {t('list2.tatca')}
                    </Link>
                </li>
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
