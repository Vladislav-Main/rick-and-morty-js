import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  nextEpisodePage,
  prevEpisodePage,
  setEpisodeCurrentPage,
} from '../../../redux/pagination/paginationSlice';
import { pagesCreator } from '../../../utils/pagesCreator';

export const EpisodePagination = () => {
  const dispatch = useDispatch();
  const { pagesCount } = useSelector((state) => state.episodes);
  const { episodeCurrentPage } = useSelector((state) => state.pagination);

  const pages = [];

  pagesCreator(pages, pagesCount, episodeCurrentPage);

  return (
    <div className="pages">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {episodeCurrentPage !== 1 ? (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  dispatch(prevEpisodePage());
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
                  episodeCurrentPage === page
                    ? 'page-link current-page'
                    : 'page-link'
                }
                onClick={() => {
                  dispatch(setEpisodeCurrentPage(page));
                }}
              >
                {page}
              </button>
            </li>
          ))}
          {episodeCurrentPage !== pagesCount ? (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  dispatch(nextEpisodePage());
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
