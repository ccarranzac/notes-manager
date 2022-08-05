<template>
  <nav>
    <h1 class="logo-title">Notes Manager</h1>
    <router-link class="menu-item" to="/calendar">Calendar</router-link>
    <router-link class="menu-item" to="/list">List</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffb562;
  width: 100%;
}

h1 {
  color: #3ab0ff;
  margin-inline: 2rem;
}

nav .menu-item {
  color: #ffffff;
  padding: 10px 30px;
  position: relative;
  text-align: center;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.3s;
  font-size: 18px;
}
nav .menu-item.active {
  border-bottom-color: #f87474;
}

nav .menu-item:hover {
  background-color: #f87474;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>
