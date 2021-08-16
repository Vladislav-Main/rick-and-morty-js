import { createSlice } from '@reduxjs/toolkit';

const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    species: [],
    status: [],
    gender: [],
    name: [],
    type: [],
    dimension: [],
    modal: false,
    itemId: null,
  },
  reducers: {
    setSpecies: (state, action) => {
      state.species = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setDimension: (state, action) => {
      state.dimension = action.payload;
    },
    setModalOpen: (state) => {
      state.modal = !state.modal;
    },
    setModalClose: (state) => {
      state.modal = !state.modal;
    },
    setItemId: (state, action) => {
      state.itemId = action.payload;
    },
  },
});

export const {
  setSpecies,
  setStatus,
  setGender,
  setName,
  setModalOpen,
  setModalClose,
  setItemId,
  setType,
  setDimension,
} = sortSlice.actions;
export default sortSlice.reducer;
