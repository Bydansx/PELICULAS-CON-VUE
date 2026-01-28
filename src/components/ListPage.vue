<script setup>
import { ref, onMounted } from 'vue';
import { ApiMovie } from "../services/api-movie.js";
import { buildUrlImage } from "../utils/buildUrlImage.js";

const movies = ref([]);
const currentPage = ref(1);

const fetchMovies = async (page = 1) => {
  try {
    const res = await ApiMovie.getMovies(page);
    movies.value = res.data.results;
    currentPage.value = page;
  } catch (error) {
    console.error("Error cargando películas:", error);
  }
}

onMounted(() => {
  fetchMovies();
});
</script>

<template>
  <div class="container">
    <header class="header">
      <h1>Listado de Películas</h1>

      <div class="pagination">
        <button
            @click="fetchMovies(currentPage - 1)"
            :disabled="currentPage <= 1"
            class="btn-nav"
        >
          &larr; Anterior
        </button>
        <span class="page-indicator">Página <strong>{{ currentPage }}</strong></span>
        <button
            @click="fetchMovies(currentPage + 1)"
            class="btn-nav"
        >
          Siguiente &rarr;
        </button>
      </div>
    </header>

    <div class="movie-grid">
      <div v-for="m in movies" :key="m.id" class="movie-card">
        <div class="image-container">
          <img :src="buildUrlImage(m.poster_path)" :alt="m.title" class="movie-img">
          <div class="overlay">
            <span class="rating">⭐ {{ m.vote_average.toFixed(1) }}</span>
          </div>
        </div>
        <div class="movie-info">
          <p class="movie-title">{{ m.title }}</p>
          <p class="movie-date">{{ new Date(m.release_date).getFullYear() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container {
  padding: 20px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
}

h1 {
  color: #ffffff;
  margin: 0;
}


.pagination {
  display: flex;
  align-items: center;
  gap: 15px;
}

.btn-nav {
  padding: 8px 16px;
  border: none;
  background-color: #880f0f;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
  font-weight: bold;
}

.btn-nav:hover:not(:disabled) {
  background-color: #880f0f;
}

.btn-nav:disabled {
  background-color: #880f0f;
  cursor: not-allowed;
}

.page-indicator {
  font-size: 0.9rem;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 25px;
}

.movie-card {
  background: #201e1e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.movie-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}

.image-container {
  position: relative;
  aspect-ratio: 2 / 3;
}

.movie-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Badge de Rating */
.overlay {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  padding: 4px 8px;
  border-radius: 6px;
  color: #f1c40f;
  font-weight: bold;
  font-size: 0.8rem;
}

.movie-info {
  padding: 15px;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.movie-title {
  font-weight: bold;
  margin: 0 0 5px 0;
  font-size: 1rem;
  color: #ffffff;
}

.movie-date {
  font-size: 0.85rem;
  color: #ffffff;
  margin: 0;
}
</style>