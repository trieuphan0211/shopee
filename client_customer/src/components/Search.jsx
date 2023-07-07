import React from "react";
import { FaAngleDown, FaCheck, FaMagnifyingGlass } from "react-icons/fa6";

export const Search = () => {
  return (
    <div className="header__search">
      <div className="header__search-input-wrap">
        <input
          type="text"
          className="header__search-input"
          placeholder="Nhập để tìm kiếm sản phẩm"
        />
        {/* Search history */}
        <div className="header__search-history">
          <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
          <ul className="header__search-history-list">
            <li className="header__search-history-item">
              <a href>Áo thun</a>
            </li>
            <li className="header__search-history-item">
              <a href>Quần đùi nam ngắn</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="header__search-select"
        style={{ display: "flex", alignItems: "center" }}
      >
        <span className="header__search-select-label">Trong Shop</span>
        <FaAngleDown className="header__search-select-icon " />
        <ul className="header__search-option">
          <li className="header__search-option-item header__search-option-item--active">
            <span>Trong Shop</span>
            <FaCheck />
          </li>
          <li className="header__search-option-item">
            <span>Ngoài Shop</span>
            <FaCheck />
          </li>
        </ul>
      </div>
      <button className="header__search-btn">
        <FaMagnifyingGlass className="header__search-btn-icon" />
        {/* <i className="header__search-btn-icon fa-solid fa-magnifying-glass" /> */}
      </button>
    </div>
  );
};
