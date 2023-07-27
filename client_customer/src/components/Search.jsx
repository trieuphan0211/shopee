import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaAngleDown, FaCheck, FaMagnifyingGlass } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Search = () => {
    const [categories, setCategories] = useState([]);
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();
    const { t } = useTranslation();

    // event-handlers
    const btnSearchClick = (e) => {
        e.preventDefault();

        navigate('/product/search/' + setKeyword.keyword);
    };

    useEffect(() => {
        apiGetCategories();
    }, []);

    // apis
    const apiGetCategories = () => {
        axios.get('/api/customer/categories').then((res) => {
            const result = res.data;
            setCategories({ categories: result });
        });
    };

    return (
        <div className="header__search">
            <div className="header__search-input-wrap">
                <input
                    type="search"
                    className="header__search-input"
                    placeholder="Nhập để tìm kiếm sản phẩm"
                    value={setKeyword.keyword}
                    onChange={(e) => {
                        setKeyword({ keyword: e.target.value });
                    }}
                />
                {/* Search history */}
                {/* <div className="header__search-history">
          <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
          <ul className="header__search-history-list">
            <li className="header__search-history-item">
              <a href>Áo thun</a>
            </li>
            <li className="header__search-history-item">
              <a href>Quần đùi nam ngắn</a>
            </li>
          </ul>
        </div> */}
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
                    btnSearchClick(e);
                }}
            >
                <FaMagnifyingGlass className="header__search-btn-icon" />
                {/* <i className="header__search-btn-icon fa-solid fa-magnifying-glass" /> */}
            </button>
        </div>
    );
};
