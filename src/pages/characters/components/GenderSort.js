import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
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
    dispatch(setGender(value.value));
  };

  return <Select value={gender.value} onChange={onChange} options={options} />;
};
