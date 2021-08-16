import React from 'react';
import { useDispatch } from 'react-redux';
import { setType } from '../../../redux/sort/sortSlice';

export const TypeSearch = () => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(setType(e.target.value));
  };
  return (
    <>
      <input
        class="form-control"
        type="text"
        placeholder="Please input type…"
        onChange={onChange}
      ></input>
    </>
  );
};
