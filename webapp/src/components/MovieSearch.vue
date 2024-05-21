<template>
    <div>
      <h1>Movie Search</h1>
      <input v-model="title" placeholder="Enter movie title" />
      <button @click="searchMovies">Search</button>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          <h2>{{ movie.title }}</h2>
          <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" alt="Poster" />
          <p>Popularity: {{ movie.popularity }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        title: '',
        movies: []
      };
    },
    methods: {
      async searchMovies() {
        const response = await axios.get(`http://localhost:3000/api/movies/${this.title}`);
        this.movies = response.data;
      }
    }
  };
  </script>
  
  <style>
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
  }
  
  img {
    max-width: 100px;
  }
  </style>
  