<template>
  <img :src="movie.posterPath" :alt="movie.title">
</template>

<script>
export default {
  props: ["movie"]
};
</script>

<style scoped>
</style>