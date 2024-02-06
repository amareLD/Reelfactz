import axios from 'axios';

export const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
  },
});

export const fetchToken = async () => {
  try {
    const { data } = await moviesApi.get('/authentication/token/new');
    const token = data.request_token;

    if (data.success) {
      localStorage.setItem('request_token', token);

      window.location.href = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    console.log('Your authentication token could not be created.');
  }
};

// export const createSessionId = async () => {
//   const token = localStorage.getItem('request_token');

//   if (token) {
//     try {
//       const {
//         data: { session_id },
//       } = await moviesApi.post('/authentication/session/new', {
//         request_token: token,
//       });
//       localStorage.setItem('session_id', session_id);

//       return session_id;
//     } catch (error) {
//       console.log('Your session id could not be created.');
//     }
//   }
// };

export const createSessionId = async () => {
  const token = localStorage.getItem('request_token');

  if (token) {
    try {
      const {
        data: { session_id },
      } = await moviesApi.post('/authentication/session/new', {
        request_token: token,
      });

      localStorage.setItem('session_id', session_id);
      return session_id; // Return the session_id value
    } catch (error) {
      console.error('Your session id could not be created.', error);
      return undefined; // Explicitly return undefined in case of an error
    }
  }

  return undefined; // Explicitly return undefined if there's no token
};
