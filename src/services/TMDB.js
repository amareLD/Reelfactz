import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { tmdbApi } from './TMDB';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // Get Genres
    getGenres: builder.query({
      query: (queryParameters) => `genre/movie/list?&api_key=${tmdbApiKey}`,
    }),
    // Get Movies by [Type]
    getMovies: builder.query({
      query: (queryParameters) => `movie/popular?page=${page}&api_key=${tmdbApiKey}`, // Replace with your actual endpoint
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
