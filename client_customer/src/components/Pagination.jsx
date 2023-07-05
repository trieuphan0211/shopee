import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const Pagination = () => {
    return (
        <div>
            <ul class="pagination home-product__pagination">
                <li class="pagination-item">
                    <a href="" class="pagination-item__link">
                        <FaAngleLeft class="pagination-item__icon fa-solid fa-angle-left" />
                    </a>
                </li>
                <li class="pagination-item pagination-item--active">
                    <a href="" class="pagination-item__link">
                        1
                    </a>
                </li>
                <li class="pagination-item">
                    <a href="" class="pagination-item__link">
                        2
                    </a>
                </li>
                <li class="pagination-item">
                    <a href="" class="pagination-item__link">
                        3
                    </a>
                </li>
                <li class="pagination-item">
                    <a href="" class="pagination-item__link">
                        4
                    </a>
                </li>
                <li class="pagination-item">
                    <a href="" class="pagination-item__link">
                        5
                    </a>
                </li>
                <li class="pagination-item">
                    <a href="" class="pagination-item__link">
                        ...
                    </a>
                </li>
                <li class="pagination-item">
                    <a href="" class="pagination-item__link">
                        8
                    </a>
                </li>
                <li class="pagination-item">
                    <a href="" class="pagination-item__link">
                        <FaAngleRight class="pagination-item__icon fa-solid fa-angle-right" />
                    </a>
                </li>
            </ul>
            <span class="home-product__range"></span>
        </div>
    );
};
