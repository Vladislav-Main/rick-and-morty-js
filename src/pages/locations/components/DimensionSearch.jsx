import React from 'react';
import { useDispatch } from 'react-redux';
import { setLocationCurrentPage } from '../../../redux/pagination/paginationSlice';
import { setDimension } from '../../../redux/sort/sortSlice';

export const DimensionSearch = () => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(setLocationCurrentPage(1));
    dispatch(setDimension(e.target.value));
  };
  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Please input dimension…"
        onChange={onChange}
      ></input>
    </>
  );
};
