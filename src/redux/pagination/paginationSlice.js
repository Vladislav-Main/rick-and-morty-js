import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    characterCurrentPage: 1,
    episodeCurrentPage: 1,
    locationCurrentPage: 1,
  },
  reducers: {
    nextCharacterPage(state) {
      state.characterCurrentPage++;
    },
    prevCharacterPage(state) {
      state.characterCurrentPage--;
    },
    setCharacterCurrentPage(state, action) {
      state.characterCurrentPage = action.payload;
    },
    nextEpisodePage(state) {
      state.episodeCurrentPage++;
    },
    prevEpisodePage(state) {
      state.episodeCurrentPage--;
    },
    setEpisodeCurrentPage(state, action) {
      state.episodeCurrentPage = action.payload;
    },
    nextLocationPage(state) {
      state.locationCurrentPage++;
    },
    prevLocationPage(state) {
      state.locationCurrentPage--;
    },
    setLocationCurrentPage(state, action) {
      state.locationCurrentPage = action.payload;
    },
  },
});

export const {
  nextCharacterPage,
  prevCharacterPage,
  setCharacterCurrentPage,
  nextEpisodePage,
  prevEpisodePage,
  setEpisodeCurrentPage,
  nextLocationPage,
  prevLocationPage,
  setLocationCurrentPage,
} = paginationSlice.actions;
export default paginationSlice.reducer;
