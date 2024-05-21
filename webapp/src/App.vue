<script setup>
</script>

<template>
  <div class="container">
    <div class="search-form">
      <MovieSearch @update-movies="updateMovies" />
    </div>
    <div class="results">
      <MovieResults :movies="movies"/>
    </div>
  </div>
</template>

<script>
  import MovieSearch from './components/MovieSearch.vue'
  import MovieResults from './components/MovieResults.vue';

  export default {
  name: 'App',
  components: {
    MovieSearch,
    MovieResults
  },
  data() {
    return {
      movies: []
    };
  },
  methods: {
    updateMovies(movies) {
      this.movies = movies;
    }
  }
};
</script>

<style>
body{
  margin: 0;
  --primary-color:#0d253f;
  --secondary-color: #01b4e4;
  --tertiary-color: #90cea1;
  --nav-color:#fff;
  --tmdbDarkBlue: #031d33;
  background-color: var(--tmdbDarkBlue);
}

#app {
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--tertiary-color);

  /* margin-top: 60px; */
}


.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  flex-direction: column;

}

.search-form {
  width: 100%;
  margin: 40px auto;
}

.results {
  /* display: grid; */
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 90%;
  padding: 16px;
  margin:auto;
}

@media (min-width: 1280px) {
  .container {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

  }

  .search-form {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .results {
    width: 65%;
    grid-template-columns: repeat(3, 1fr);
    padding: 16px;
  }
}

@media (max-width: 1279px) {
  .search-form {
    margin-bottom: 16px;
  }

  .results {
    grid-template-columns: repeat(3, 1fr);
  }
}
.container{
  display: flexbox;
  grid-template-columns: 1fr;
  flex-direction: column;
}
</style>

<!-- 
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
