const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'c08cabba41a8ed2d95fbb0a8eb1f4229';

const getTrendingMovies = fetch(
  `${BASE_URL}/trending/all/day?api_key=${KEY}`,
).then(response => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error('This request is not successful'));
});

const getSearchQueryMovies = fetch(
  `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false`,
).then(response => {
  if (response.ok) {
    response.json();
  }
  return Promise.reject(new Error('This request is not successful'));
});

const getMovieDetails = fetch(
  `${BASE_URL}/movie/{movie_id}?api_key=${KEY}&language=en-US`,
).then(response => {
  if (response.ok) {
    response.json();
  }
  return Promise.reject(new Error('This request is not successful'));
});

const getMovieCredits = fetch(
  movieId =>
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
).then(response => {
  if (response.ok) {
    response.json();
  }
  return Promise.reject(new Error('This request is not successful'));
});

const getMovieReviews = fetch(
  movieId =>
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`,
).then(response => {
  if (response.ok) {
    response.json();
  }
  return Promise.reject(new Error('This request is not successful'));
});

export {
  getTrendingMovies,
  getSearchQueryMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
