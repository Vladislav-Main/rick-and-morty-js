import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

export const getLocation = createAsyncThunk(
  'locations/getLocations',
  async (params) => {
    let { currentPage, name, type, dimension } = params;
    let url = new URL(
      `${process.env.REACT_APP_LOCATION_API_URL}/?page=${currentPage}`
    );
    if (name.length !== 0) {
      url.searchParams.append('name', [name]);
    }
    if (type.length !== 0) {
      url.searchParams.append('type', [type]);
    }
    if (dimension.length !== 0) {
      url.searchParams.append('dimension', [dimension]);
    }

    const data = fetch(url, {
      method: 'GET',
    }).then((res) => res.json());
    return data;
  }
);

export const locationAdapter = createEntityAdapter({
  selectId: ({ id }) => id,
});
export const {
  selectAll: selectAllLocations,
  selectById: selectLocationById,
  selectIds: selectLocations,
  selectEntities: selectLocationEntity,
} = locationAdapter.getSelectors((state) => state.locations);

const locationSlice = createSlice({
  name: 'locations',
  initialState: locationAdapter.getInitialState(),
  extraReducers: {
    [getLocation.pending]: (state) => {
      state.status = 'loading';
    },
    [getLocation.fulfilled]: (state, { payload }) => {
      if (payload.error) {
        locationAdapter.setAll(state, []);
        state.prevPage = '';
        state.nextPage = '';
        state.pagesCount = 0;
        state.totalItems = 0;
      } else {
        state.prevPage = payload.info.prev;
        state.nextPage = payload.info.next;
        state.pagesCount = payload.info.pages;
        state.totalItems = payload.info.count;
        locationAdapter.setAll(state, payload.results);
      }
      state.status = 'success';
    },
    [getLocation.rejected]: (state) => {
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
} = locationSlice.actions;

export default locationSlice.reducer;
