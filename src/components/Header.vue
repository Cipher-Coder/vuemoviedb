<template>
  <header>
    <h1>
      <router-link to="/">{{ title }}</router-link>
    </h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String
  },
  data() {
    return {
      show: false,
      name: "Matt"
    };
  }
};
</script>

<style scoped>
header {
  background-color: #111;
  padding: 30px;
  color: white;
}

h1 {
  margin: 0;
}
</style>