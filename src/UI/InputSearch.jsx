import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setEpisodeCurrentPage,
  setLocationCurrentPage,
} from '../redux/pagination/paginationSlice';
import { setName } from '../redux/sort/sortSlice';

export const InputSearch = () => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(setEpisodeCurrentPage(1));
    dispatch(setLocationCurrentPage(1));
    dispatch(setName(e.target.value));
  };
  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Please input name…"
        onChange={onChange}
      ></input>
    </>
  );
};
