import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { setCharacterCurrentPage } from '../../../redux/pagination/paginationSlice';
import { setSpecies } from '../../../redux/sort/sortSlice';

export const SpeciesSort = () => {
  const { species } = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  const options = [
    { value: 'human', label: 'Human' },
    { value: 'alien', label: 'Alien' },
    { value: 'humanoid', label: 'Humanoid' },
    { value: 'animal', label: 'Animal' },
    { value: 'poopybutthole', label: 'Poopybutthole' },
    { value: 'mythological Creature', label: 'Mythological Creature' },
    { value: 'robot', label: 'Robot' },
    { value: 'cronenberg', label: 'Cronenberg' },
    { value: 'disease', label: 'Disease' },
    { value: 'unknown', label: 'unknown' },
    { value: '', label: 'All' },
  ];

  const onChange = (value) => {
    dispatch(setCharacterCurrentPage(1));
    dispatch(setSpecies(value.value));
  };

  let selectedStatus = options.find((v) => v.value === species);

  return (
    <Select value={selectedStatus} onChange={onChange} options={options} />
  );
};
