import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { setCharacterCurrentPage } from '../../../redux/pagination/paginationSlice';
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
    dispatch(setCharacterCurrentPage(1));
    dispatch(setStatus(value.value));
  };
  let selectedStatus = options.find((v)=>v.value===status);

  return <Select value={selectedStatus} onChange={onChange} options={options} />;
};
