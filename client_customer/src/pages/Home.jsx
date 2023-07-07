import React from "react";
import { Content, ListProducts, Pagination } from "../components";

export const Home = () => {
  return (
    <div className="app__container">
      <div className="grid wide">
        <div className="row sm-gutter app__content">
          <div className="col l-2 m-0 c-0">
            <ListProducts />
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
              <Content />
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};
