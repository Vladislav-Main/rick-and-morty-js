import React from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../redux/sort/sortSlice';

export const InputSearch = () => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(setName(e.target.value));
  };
  return (
    <>
      <input
        class="form-control"
        type="text"
        placeholder="Please input name…"
        onChange={onChange}
      ></input>
    </>
  );
};
