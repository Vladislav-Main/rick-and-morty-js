import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  nextCharacterPage,
  prevCharacterPage,
  setCharacterCurrentPage,
} from '../../../redux/pagination/paginationSlice';
import { pagesCreator } from '../../../utils/pagesCreator';

export const CharacterPagination = () => {
  const dispatch = useDispatch();
  const { pagesCount } = useSelector((state) => state.characters);
  const { characterCurrentPage } = useSelector((state) => state.pagination);

  const pages = [];

  pagesCreator(pages, pagesCount, characterCurrentPage);

  return (
    <div className="pages">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {characterCurrentPage !== 1 ? (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  dispatch(prevCharacterPage());
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
                  characterCurrentPage === page
                    ? 'page-link current-page'
                    : 'page-link'
                }
                onClick={() => {
                  dispatch(setCharacterCurrentPage(page));
                }}
              >
                {page}
              </button>
            </li>
          ))}
          {characterCurrentPage !== pagesCount ? (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  dispatch(nextCharacterPage());
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
