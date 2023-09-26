<template>
    <nav class="content">
        <router-link to="/" class='heading'>Project</router-link>
        <router-link to="/addnewtodo" class='heading'>
            Add a new Project
        </router-link>
        <router-view></router-view>
    </nav>
</template>

<script>
export default {
    name: 'headingText',
}
</script>

<style scoped>
.content {
    padding: 0;
    margin: -7px;
    padding: .3rem;
    height: 100vh;
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
    text-decoration: none;
}

nav a.router-link-active {
    border-bottom: 4px solid green;

}

@media screen and (min-width: 120px) and (max-width: 427px) {
    span {
        font-size: 20px;
    }
}
</style>
