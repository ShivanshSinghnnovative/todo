<template>
<div class="projectPaths">
    <router-link :to="{ path: `/`  }" class="viewAll" :class="{ clicked: currentRoute === '/' }">VIEW ALL</router-link>
    <router-link :to="{ path: `/completed` }" class="viewAll" :class="{clicked : currentRoute === '/completed' }">COMPLETED</router-link>
    <router-link :to="{ path: `/ongoing` }" class="viewAll" :class="{ clicked: currentRoute === '/ongoing' }">ONGOING</router-link>
</div>
<div v-if="this.$route.path==`/`">
    <div class="projectBoxs" v-for="titled in titles" :key="titled" :class="titled.uncompleted ? 'green' : 'white'">

        <div class="display">
            <div @click="showDetails(titled)" class="titleHeading"> {{ titled.title }}

                <div v-if="titled.showDetail" class="deatilHeading">
                    {{ titled.description }}
                </div>
            </div>
            <div class="icon">
                <font-awesome-icon icon="fa-solid fa-trash" @click="deletetitle(titled)" class="icon-styling"/>

                <router-link :to="{ path: `/UpdateTodo/${titled.id}` }">
                    <font-awesome-icon icon="fa-solid fa-pen" class="icon-styling"/>
                </router-link>
                <div @click="completedTodo(titled)">
                    <font-awesome-icon :icon="titled.uncompleted ? 'fas fa-check' : 'fas fa-check'" :class="titled.uncompleted ? 'green-icon' : 'white-icon'" />
                </div>
            </div>
        </div>
    </div>
</div>

<div v-if="this.$route.path==`/ongoing`">
    <div v-for="titled in titles" :key="titled">
        <div class="projectBoxs" v-if="!titled.uncompleted" :class="titled.uncompleted ? 'green' : 'white'">
            <div class="display">
                <div @click="showDetails(titled)" class="titleHeading"> {{ titled.title }}

                    <div v-if="titled.showDetail" class="deatilHeading">
                        {{ titled.description }}
                    </div>
                </div>
                <div class="icon">
                    <font-awesome-icon icon="fa-solid fa-trash" @click="deletetitle(titled)" class="icon-styling"/>

                    <router-link :to="{ path: `/UpdateTodo/${titled.id}` }">
                        <font-awesome-icon icon="fa-solid fa-pen" class="icon-styling"/>
                    </router-link>
                    <div @click="completedTodo(titled)">
                        <font-awesome-icon :icon="titled.uncompleted ? 'fas fa-check' : 'fas fa-check'" :class="titled.uncompleted ? 'green-icon' : 'white-icon'" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div v-if="this.$route.path==`/completed`">
    <div v-for="titled in titles" :key="titled">
        <div class="projectBoxs" v-if="titled.uncompleted" :class="titled.uncompleted ? 'green' : 'white'">
            <div class="display">
                <div @click="showDetails(titled)" class="titleHeading"> {{ titled.title }}

                    <div v-if="titled.showDetail" class="deatilHeading">
                        {{ titled.description }}
                    </div>
                </div>
                <div class="icon">
                    <font-awesome-icon icon="fa-solid fa-trash" @click="deletetitle(titled)" class="icon-styling" />

                    <router-link :to="{ path: `/UpdateTodo/${titled.id}` }">
                        <font-awesome-icon icon="fa-solid fa-pen"  class="icon-styling" />
                    </router-link>
                    <div @click="completedTodo(titled)">
                        <font-awesome-icon icon="fas fa-check" :class="titled.uncompleted ? 'green-icon' : 'white-icon'" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
const STORAGE_KEY = 'vue-todo';
export default {
    name: 'LandingPage',
    data() {
        return {
            titles: [],
            heading: ''
        }
    },
    created() {
        let todoss = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

        for (let i = 0; i < todoss.length; i++) {
            this.titles.push({
                'id': todoss[i].id,
                'title': todoss[i].title,
                'description': todoss[i].description,
                'showDetail': false,
                'uncompleted': todoss[i].uncompleted
            });
        }

    },
    computed: {
        currentRoute() {
            console.log(this.$route.path)
            return this.$route.path;
        },
    },
    methods: {
        deletetitle(title) {
            console.log(title)
            const index = this.titles.indexOf(title);
            console.log(index);
            if (index !== -1) {
                this.titles.splice(index, 1);
            }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.titles));
        },

        showDetails(detailed) {
            detailed.showDetail = !detailed.showDetail;
        },
        completedTodo(idforComplete) {

            console.log(idforComplete)
            const index = this.titles.indexOf(idforComplete);
            console.log(index);
            console.log(this.titles[index].uncompleted)
            this.titles[index].uncompleted = !this.titles[index].uncompleted
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.titles));
        }

    }

}
</script>

<style scoped>
.viewAll {
    text-decoration: none !important;
    color: gray;
    margin-top: 2rem;
    font-weight: 600;
}
.icon-styling{
    color: gray;
    font-size: 25px;
}
.clicked {
    position: relative;
    /* Add relative positioning */
    color: rgb(99, 99, 99);
}

.clicked::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    right: 0;
    height: 3px;
    background-color: rgb(65, 109, 49);
    transition: all linear 0.5s;
}

.projectPaths {
    display: flex;
    gap: 1.5rem;
    margin-left: 1rem;
}

.green {
    border-left: 10px solid green;
    
}

.green-icon {
    color: green;
   font-size: 30px;
}

.white {
    border-left: 10px solid rgb(209, 104, 104);
}

.white-icon {
    color: grey;
    font-size: 30px;
}

.projectBoxs {
    width: 80%;

    background-color: white;
    margin-top: 2rem;
    height: fit-content;
    margin-left: 3%;
    margin-bottom: 20px;
    margin-left: 3%;
    margin-top: 2rem;
    border-radius: 1rem;
    cursor: pointer;
    inline-size: auto;
    padding: 2rem;
    display: flex;
    gap: 4%;

}

.strip {
    border-radius: 1rem;
    width: 1%;
    margin-left: -2rem;
    display: flex;

}

.display {

    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.icon {
    display: flex;
    gap: 20px;
    cursor: pointer;
}

.titleHeading {
    font-size: 30px;
    font-weight: 600;
    width: 80%;
    text-align: left;
    height: 100%;

}

.deatilHeading {
    font-size: 20px;
    margin-top: 0.8rem;
    font-weight: 500;
}
</style>
