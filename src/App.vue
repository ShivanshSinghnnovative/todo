<template>
<div class="content">
    <router-link to="/" class="heading" :class="{ header: currentRoute === '/' || currentRoute === '/completed' || currentRoute === '/ongoing'}"><span>Project</span></router-link>
    <router-link to="/addnewproject" class="heading" :class="{ header: currentRoute === '/addnewproject' }">
      <span>Add a new Project</span>
    </router-link>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'App',
    computed: {
        currentRoute() {
            return this.$route.path;
        },
    },
}
</script>

<style scoped>

.content {
    padding: 0;
    margin: -7px;
    padding: .3rem;
    height: 99vh;
    font-family: sans-serif;
    text-align: center;
    background-color: lightgray;
}

.heading {
    color: rgb(147, 145, 145);
    font-size: 30px;
    margin-left: 1rem;
    margin-right: 1rem;
    gap: 1rem;
    flex-direction: row;
    justify-content: center;
    transition: all linear 0.5s;
    text-decoration: none;
}

.header {
  position: relative; /* Add relative positioning */
  color: rgb(99, 99, 99);
}

.header::after {
  content: ""; 
  position: absolute;
  bottom: -3px; 
  left: 0;
  right: 0;
  height: 3px; 
  background-color: rgb(65, 109, 49);
  transition: all linear 0.5s;
}
</style>
