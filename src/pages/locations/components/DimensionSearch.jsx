import React from 'react';
import { useDispatch } from 'react-redux';
import { setDimension } from '../../../redux/sort/sortSlice';

export const DimensionSearch = () => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(setDimension(e.target.value));
  };
  return (
    <>
      <input
        class="form-control"
        type="text"
        placeholder="Please input dimension…"
        onChange={onChange}
      ></input>
    </>
  );
};
