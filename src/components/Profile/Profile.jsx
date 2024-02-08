import React, { useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useSelector } from 'react-redux';

// import { RatedCards } from '..';

import { userSelector } from '../../features/auth';
// import { useGetUsersListQuery } from '../../services/TMDB';

export default function Profile() {
  const { user } = useSelector(userSelector);

  const favoriteMovies = [];

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  console.log(user);
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length ? (
        <Typography variant="h5">
          Add favorites or watchlist some movies to see them here!
        </Typography>
      ) : (
        <Box>Favorite Movies</Box>
      )}
    </Box>
  );
}
