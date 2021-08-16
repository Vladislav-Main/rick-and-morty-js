import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { setStatus } from '../../../redux/sort/sortSlice';

export const StatusSort = () => {
  const { status } = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  const options = [
    { value: 'alive', label: 'Alive' },
    { value: 'dead', label: 'Dead' },
    { value: 'unknown', label: 'unknown' },
    { value: '', label: 'All' },
  ];

  const onChange = (value) => {
    dispatch(setStatus(value.value));
  };

  return <Select value={status.value} onChange={onChange} options={options} />;
};
