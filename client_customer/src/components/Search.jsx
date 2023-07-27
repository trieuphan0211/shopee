import React, { useContext, useRef, useState } from 'react';
import axios from 'axios';
import { FaAngleDown, FaCheck, FaMagnifyingGlass } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MyContext from '../contexts/MyContext';

export const Search = () => {
    const [categories, setCategories] = useState([]);
    const key = useRef();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const context = useContext(MyContext);
    // event-handlers
    const btnSearchClick = () => {
        navigate('/customer/home/' + key.current.value);
    };

    return (
        <div className="header__search">
            <div className="header__search-input-wrap">
                <input
                    type="search"
                    ref={key}
                    className="header__search-input"
                    placeholder="Nhập để tìm kiếm sản phẩm"
                    onChange={(e) => {
                        context.setKeyWord(key.current?.value);
                    }}
                />
            </div>
            <div className="header__search-select" style={{ display: 'flex', alignItems: 'center' }}>
                <span className="header__search-select-label">{t('search1.trongshop')}</span>
                <FaAngleDown className="header__search-select-icon " />
                <ul className="header__search-option">
                    <li className="header__search-option-item header__search-option-item--active">
                        <span>{t('search1.trongshop')}</span>
                        <FaCheck />
                    </li>
                    <li className="header__search-option-item">
                        <span>{t('search2.ngoaishop')}</span>
                        <FaCheck />
                    </li>
                </ul>
            </div>
            <button
                className="header__search-btn"
                onClick={(e) => {
                    btnSearchClick();
                }}
            >
                <FaMagnifyingGlass className="header__search-btn-icon" />
                {/* <i className="header__search-btn-icon fa-solid fa-magnifying-glass" /> */}
            </button>
        </div>
    );
};
