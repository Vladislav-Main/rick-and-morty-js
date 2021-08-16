import { configureStore } from '@reduxjs/toolkit';

import charactersReducer from './characters/charactersSlice';
import episodesReducer from './episodes/episodesSlice';
import locationsReducer from './locations/locationSlice';
import paginationReducer from './pagination/paginationSlice';
import sortReducer from './sort/sortSlice';

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    episodes: episodesReducer,
    locations: locationsReducer,
    pagination: paginationReducer,
    sort: sortReducer,
  },
});

export default store;
