import React from 'react';
import { useDispatch } from 'react-redux';
import { setLocationCurrentPage } from '../../../redux/pagination/paginationSlice';
import { setType } from '../../../redux/sort/sortSlice';

export const TypeSearch = () => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(setLocationCurrentPage(1));
    dispatch(setType(e.target.value));
  };
  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Please input type…"
        onChange={onChange}
      ></input>
    </>
  );
};
