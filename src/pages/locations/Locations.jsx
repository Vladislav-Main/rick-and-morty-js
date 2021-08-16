import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLocation,
  selectAllLocations,
} from '../../redux/locations/locationSlice';
import { InputSearch } from '../../UI/InputSearch';
import { LocationPagination } from './components/LocationPagination';
import { Table } from './components/Table';
import { TypeSearch } from './components/TypeSearch';
import { DimensionSearch } from './components/DimensionSearch';
import { Spinner } from '../../UI/Spinner';
import { Failed } from '../../UI/Failed';

export const Locations = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.locations.status);
  const data = useSelector(selectAllLocations);
  const { locationCurrentPage } = useSelector((state) => state.pagination);
  const currentPage = locationCurrentPage;
  const { name, type, dimension } = useSelector((state) => state.sort);

  useEffect(() => {
    dispatch(getLocation({ currentPage, name, type, dimension }));
  }, [dispatch, currentPage, name, type, dimension]);

  if (status === 'loading') {
    return <Spinner />;
  }

  if (status === 'failed') {
    return <Failed />;
  }

  return (
    <div className="row mt-1">
      <div className="col-4 mb-2">
        <InputSearch />
      </div>
      <div className="col-4 mb-2">
        <TypeSearch />
      </div>
      <div className="col-4 mb-2">
        <DimensionSearch />
      </div>

      <LocationPagination />
      <Table data={data} />
      <LocationPagination />
    </div>
  );
};
