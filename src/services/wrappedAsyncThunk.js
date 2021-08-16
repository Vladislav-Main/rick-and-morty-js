import { createAsyncThunk } from '@reduxjs/toolkit';

export const wrappedAsyncThunk = (path, url) => {
  return createAsyncThunk(path, async (params) => {
    const { currentPage } = params;
    const data = fetch(url + `/?page=${currentPage}`, {
      method: 'GET',
    }).then((res) => res.json());
    return data;
  });
};
