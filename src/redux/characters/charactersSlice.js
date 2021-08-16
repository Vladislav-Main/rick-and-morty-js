import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';


export const getCharacter = createAsyncThunk(
  'characters/getCharacters',
  async (params) => {
    let { currentPage, species, status, gender } = params;
    let url = new URL(
      `${process.env.REACT_APP_CHARACTER_API_URL}/?page=${currentPage}`
    );
    if (species.length !== 0) {
      url.searchParams.append('species', [species]);
    }
    if (status.length !== 0) {
      url.searchParams.append('status', [status]);
    }
    if (gender.length !== 0) {
      url.searchParams.append('gender', [gender]);
    }
    const data = fetch(url, {
      method: 'GET',
    }).then((res) => res.json());
    return data;
  }
);

export const charactersAdapter = createEntityAdapter({
  selectId: ({ id }) => id,
});
export const {
  selectAll: selectAllCharacters,
  selectById: selectCharacterById,
  selectIds: selectCharacters,
  selectEntities: selectCharacterEntity,
} = charactersAdapter.getSelectors((state) => state.characters);

const charactersSlice = createSlice({
  name: 'characters',
  initialState: charactersAdapter.getInitialState(),

  extraReducers: {
    [getCharacter.pending]: (state) => {
      state.status = 'loading';
    },
    [getCharacter.fulfilled]: (state, { payload }) => {
      charactersAdapter.setAll(state, payload.results);
      state.status = 'success';

      state.prevPage = payload.info.prev;
      state.nextPage = payload.info.next;
      state.pagesCount = payload.info.pages;
      state.totalItems = payload.info.count;
    },
    [getCharacter.rejected]: (state) => {
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
} = charactersSlice.actions;

export default charactersSlice.reducer;
