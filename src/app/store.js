import { configureStore } from '@reduxjs/toolkit';

import { tmdbApi } from '../services/TMDB';
import genreOrCategoryReducer from '../features/currentGenreOrCategory';
// import { genreOrCategory } from '../features/currentGenreOrCategory';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
