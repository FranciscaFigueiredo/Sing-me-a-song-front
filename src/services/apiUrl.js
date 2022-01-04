const api = process.env.NODE_ENV === 'production' ? 'https://sing-me-a-song-api.herokuapp.com' : 'http://localhost:4000';

export {
  api,
};
