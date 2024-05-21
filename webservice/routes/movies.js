const express = require('express');
const axios = require('axios');
const router = express.Router();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

router.get('/:title', async (req, res) => {
  const title = req.params.title;

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query: title,
        include_adult: false,
        language: "en-US",
        region: "US"
      }
    });

    const movies = response.data.results
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 10)
      .map(movie => ({
        title: movie.title,
        id: movie.id,
        poster_path: movie.poster_path,
        popularity: movie.popularity
      }));

    res.json(movies);
    console.log(movies);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from TMDB' });
  }
});

module.exports = router;

// // example from tmdb api page:
// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjQ5N2NmNjU5Y2UwMTNjOGFlMzdlYTQzOGE4NDAxNCIsInN1YiI6IjY2NGNiODFmYjE0MjUxN2I2OTdkMTdhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B46prvv3ddEp6s73CQqMzTGaPmy1P-mF_pXKG61RWGg'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));