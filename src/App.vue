<template>
  <header>
    <nav-bar></nav-bar>
  </header>
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: { NavBar },
  mounted() {
    this.$store.dispatch("initialNotes");
  },
};
</script>

<style>
@import "../src/styles/global.css";
</style>
