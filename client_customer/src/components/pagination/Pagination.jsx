import React from 'react';
import classnames from 'classnames';
import { DOTS, usePagination } from './usePagination';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
export const Pagination = (props) => {
    const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <div>
            <ul
                class={classnames('pagination-container', 'pagination home-product__pagination', {
                    [className]: className,
                })}
            >
                <li
                    className={classnames('pagination-item', {
                        disabled: currentPage === 1,
                    })}
                    onClick={onPrevious}
                >
                    <a class="pagination-item__link">
                        <FaAngleLeft class="pagination-item__icon fa-solid fa-angle-left" />
                    </a>
                </li>
                {paginationRange.map((pageNumber) => {
                    // If the pageItem is a DOT, render the DOTS unicode character
                    if (pageNumber === DOTS) {
                        return <li className="pagination-item dots">&#8230;</li>;
                    }

                    // Render our Page Pills
                    return (
                        <li
                            className={classnames('pagination-item', {
                                selected: pageNumber === currentPage,
                            })}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            <a class="pagination-item__link">{pageNumber}</a>
                        </li>
                    );
                })}
                {/* <li class="pagination-item pagination-item--active">
                <a  class="pagination-item__link">
                    1
                </a>
            </li> */}

                <li
                    className={classnames('pagination-item', {
                        disabled: currentPage === lastPage,
                    })}
                    onClick={onNext}
                >
                    <a class="pagination-item__link">
                        <FaAngleRight class="pagination-item__icon fa-solid fa-angle-right" />
                    </a>
                </li>
            </ul>
            <span class="home-product__range"></span>
        </div>
    );
};

export default Pagination;
