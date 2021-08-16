import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCharacter,
  selectAllCharacters,
} from '../../redux/characters/charactersSlice';
import { CharacterPagination } from './components/CharacterPagination';
import { Card } from './components/Card';
import { SpeciesSort } from './components/SpeciesSort';
import { StatusSort } from './components/StatusSort';
import { GenderSort } from './components/GenderSort';
import { ModalWindow } from './components/ModalWindow';
import { Spinner } from '../../UI/Spinner';
import { Failed } from '../../UI/Failed';

export const Characters = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.characters.status);
  const data = useSelector(selectAllCharacters);
  const { characterCurrentPage } = useSelector((state) => state.pagination);
  const { species, status, gender } = useSelector((state) => state.sort);
  const currentPage = characterCurrentPage;

  useEffect(() => {
    dispatch(getCharacter({ currentPage, species, status, gender }));
  }, [dispatch, currentPage, species, status, gender]);

  if (loading === 'loading') {
    return <Spinner />;
  }

  if (loading === 'failed') {
    return <Failed />;
  }

  return (
    <div className="row mt-1">
      <div className="col-4 mb-2">
        <SpeciesSort />
      </div>
      <div className="col-4 mb-2">
        <StatusSort />
      </div>
      <div className="col-4 mb-2">
        <GenderSort />
      </div>

      <div className="pagination">
        <CharacterPagination />
      </div>

      <div className="col-ms-6"></div>

      {data.map((item) => {
        return (
          <div className="col-sm-3 mb-3" key={item.id}>
            <Card item={item} />
          </div>
        );
      })}
      <div className="pagination">
        <CharacterPagination />
      </div>
      <ModalWindow />
    </div>
  );
};
