<template>
    <nav class="projectPaths">
        <router-link :to="{ path: `/viewall` }" class="viewAll">VIEW ALL</router-link>
        <router-link :to="{ path: `/completed` }" class="viewAll">COMPLETED</router-link>
        <router-link :to="{ path: `/ongoing` }" class="viewAll">ONGOING</router-link>
    </nav>
</template>

<script>
export default {
    name: 'ProjectHeader',
}
</script>

<style scoped>
.projectPaths {
    display: flex;
    gap: 1.5rem;
    margin-left: 1rem;
}

.viewAll {
    text-decoration: none !important;
    color: gray;
    margin-top: 2rem;
    font-weight: 600;
}

nav a.router-link-active {
    border-bottom: 4px solid green;

}
</style>
