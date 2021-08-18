import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { setCharacterCurrentPage } from '../../../redux/pagination/paginationSlice';
import { setGender } from '../../../redux/sort/sortSlice';

export const GenderSort = () => {
  const { gender } = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  const options = [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'genderless', label: 'Genderless' },
    { value: 'unknown', label: 'unknown' },
    { value: '', label: 'All' },
  ];

  const onChange = (value) => {
    dispatch(setCharacterCurrentPage(1));
    dispatch(setGender(value.value));
  };
  let selectedStatus = options.find((v)=>v.value===gender);

  return <Select value={selectedStatus} onChange={onChange} options={options} />;
};
