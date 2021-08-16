import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  nextLocationPage,
  prevLocationPage,
  setLocationCurrentPage,
} from '../../../redux/pagination/paginationSlice';
import { pagesCreator } from '../../../utils/pagesCreator';

export const LocationPagination = () => {
  const dispatch = useDispatch();
  const { pagesCount } = useSelector((state) => state.locations);
  const { locationCurrentPage } = useSelector((state) => state.pagination);

  const pages = [];

  pagesCreator(pages, pagesCount, locationCurrentPage);

  return (
    <div className="pages">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {locationCurrentPage !== 1 ? (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  dispatch(prevLocationPage());
                }}
              >
                Previous
              </button>
            </li>
          ) : null}
          {pages.map((page, index) => (
            <li key={index} className="page-item">
              <button
                className={
                  locationCurrentPage === page
                    ? 'page-link current-page'
                    : 'page-link'
                }
                onClick={() => {
                  dispatch(setLocationCurrentPage(page));
                }}
              >
                {page}
              </button>
            </li>
          ))}
          {locationCurrentPage !== pagesCount ? (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  dispatch(nextLocationPage());
                }}
              >
                Next
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};
