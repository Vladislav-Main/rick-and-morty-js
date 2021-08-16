import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getEpisode,
  selectAllEpisodes,
} from '../../redux/episodes/episodesSlice';
import { EpisodePagination } from './components/EpisodePagination';
import { InputSearch } from '../../UI/InputSearch';
import { Table } from './components/Table';
import { Spinner } from '../../UI/Spinner';
import { Failed } from '../../UI/Failed';

export const Episodes = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.episodes.status);
  const data = useSelector(selectAllEpisodes);
  const { episodeCurrentPage } = useSelector((state) => state.pagination);
  const currentPage = episodeCurrentPage;
  const { name } = useSelector((state) => state.sort);

  useEffect(() => {
    dispatch(getEpisode({ currentPage, name }));
  }, [dispatch, currentPage, name]);

  if (status === 'loading') {
    return <Spinner />;
  }

  if (status === 'failed') {
    return <Failed />;
  }

  return (
    <div>
      <InputSearch />
      <div className="pagination">
        <EpisodePagination />
      </div>
      <Table data={data} />
      <div className="pagination">
        <EpisodePagination />
      </div>
    </div>
  );
};
