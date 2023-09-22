<template>
  <div class="content">
    <router-link to="/" class="heading">Project</router-link> 
  <router-link to="/AddnewProject" class="heading">Add a new Project</router-link>
  <router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style scoped>
.content {
  padding: 0;
  margin: 0;
  padding: .3rem;
  border-radius: 1rem;
  font-family: sans-serif;
  text-align: center;
  background-color: lightgray;
 
}
.heading{
  color: grey;
  font-size: 30px;
  margin-left: 2rem;
  flex-direction: row;
  justify-content: center;
  text-decoration: none !important;
}
</style>
