import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

export const getEpisode = createAsyncThunk(
  'episodes/getEpisodes',
  async (params) => {
    let { currentPage, name } = params;
    let url = new URL(
      `${process.env.REACT_APP_EPISODE_API_URL}/?page=${currentPage}`
    );
    if (name.length !== 0) {
      url.searchParams.append('name', [name]);
    }

    const data = fetch(url, {
      method: 'GET',
    }).then((res) => res.json());
    return data;
  }
);

export const episodeAdapter = createEntityAdapter({
  selectId: ({ id }) => id,
});
export const {
  selectAll: selectAllEpisodes,
  selectById: selectEpisodeById,
  selectIds: selectEpisodes,
  selectEntities: selectEpisodeEntity,
} = episodeAdapter.getSelectors((state) => state.episodes);

const episodeSlice = createSlice({
  name: 'episodes',
  initialState: episodeAdapter.getInitialState(),
  extraReducers: {
    [getEpisode.pending]: (state) => {
      state.status = 'loading';
    },
    [getEpisode.fulfilled]: (state, { payload }) => {
      if (payload.error) {
        episodeAdapter.setAll(state, []);
        state.prevPage = '';
        state.nextPage = '';
        state.pagesCount = 0;
        state.totalItems = 0;
      } else {
        state.prevPage = payload.info.prev;
        state.nextPage = payload.info.next;
        state.pagesCount = payload.info.pages;
        state.totalItems = payload.info.count;
        episodeAdapter.setAll(state, payload.results);
      }
      state.status = 'success';
    },
    [getEpisode.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const {
  nextPage,
  prevPage,
  setCurrentPage,
  setPerPage,
  removeAllEntities,
} = episodeSlice.actions;

export default episodeSlice.reducer;
