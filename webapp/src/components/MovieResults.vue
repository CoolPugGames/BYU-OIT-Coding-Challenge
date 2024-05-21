<template>
    <div>
      <ul class="movie-grid">
        <li v-for="movie in movies" :key="movie.id" class="movie-item">
          <h2>{{ movie.title }}</h2>
          <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" alt="Poster" />
          <p>Popularity: {{ movie.popularity }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      movies: Array
    }
  };
  </script>
  
  <!-- <style>
  .directory-category {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 5px 20px; /* Adjust the gap between elements as needed */
    /* background-color: var(--maize); */
    margin: 10px;
    color: var(--cerise-pink);
    justify-content: center;
    /* padding: 0px 0px; */
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    /* grid-template-columns: repeat(1, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    gap: 16px;
  }
  
  li {
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  img {
    max-width: 100px;
  }
  
  @media (min-width: 1280px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  </style> -->


  <style>
  .movie-grid {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three columns */
    gap: 16px;
  }
  
  .movie-item {
    background: var(--tmdbDarkBlue);
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  img {
    max-width: 100px;
  }
  </style>
  