import React, { useState, useEffect } from 'react';
import {
  Box,
  CircularProgress,
  useMediaQuerry,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';

function Movies() {
  const { data } = useGetMoviesQuery();

  console.log(data);

  return <div>Moviess</div>;
}

export default Movies;
