import React, { useState, useEffect } from 'react';
import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  Rating,
} from '@mui/material';
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ArrowBack,
} from '@mui/icons-material';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { selectGenreOrCategory, genreOrCategory } from '../../features/currentGenreOrCategory';
import useStyles from './styles';
import genreCategoryIcons from '../../assets/genres';

import { useGetMovieQuery } from '../../services/TMDB';

export default function MovieInformation() {
  const { id } = useParams();
  const { data, error, isFetching } = useGetMovieQuery(id);
  const classes = useStyles();
  const noImage = 'https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg';
  const ratings = data?.vote_average;
  const ratingInt = Number(ratings).toFixed(1);
  const dispatch = useDispatch();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something has gone wrong - Go back</Link>
      </Box>
    );
  }

  console.log(data);

  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img
          className={classes.poster}
          src={
            data?.poster_path
              ? `https://image.tmdb.org/t/p/w500/${data?.poster_path}`
              : noImage
          }
          alt={data?.title}
        />
      </Grid>

      <Grid item container direction="column" lg={7}>
        { /* title, tagline, rating, runtime, spoken languages */ }
        <Typography variant="h3" align="center" gutterBottom>
          {' '}
          {data?.title}({data.release_date.split('_')[0]})
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {' '}
          {data?.tagline}
        </Typography>
        <Grid item className={classes.containerSpaceAround}>
          <Box display="flex" align="center">
            <Rating readOnly value={data.vote_average / 2} />
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginLeft: '10px' }}
            >
              {ratingInt} / 10
            </Typography>
          </Box>
          <Typography variant="h6" align="center" gutterBottom>
            {data?.runtime}min |{' '}
            {data?.spoken_languages?.length > 0
              ? data?.spoken_languages[0].name
              : ''}
          </Typography>
        </Grid>
        { /* genres and overview */ }
        <Grid item className={classes.genresContainer}>
          {data?.genres?.map((genre) => (
            <Link
              key={genre?.name}
              className={classes.links}
              to="/"
              onClick={() => dispatch(selectGenreOrCategory(genre.id))}
            >
              <img src={genreCategoryIcons[genre?.name.toLowerCase()]} className={classes.genreImage} height={30} />
              <Typography color="textPrimary" variant="subtitle1">
                {genre?.name}
              </Typography>
            </Link>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
