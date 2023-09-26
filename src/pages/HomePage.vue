<template>
    <projectHeader></projectHeader>

    <div class="projectBoxs" v-for="todoData in filteredTodo" :key="todoData.id"
        :class="todoData.completed ? 'green-icon green' : 'white-icon white'">
        <div class="display">
            <div @click="showDetails(todoData)" class="titleHeading"> {{ todoData.title }}
                <div v-if="todoData?.showDetail" class="deatilHeading"> {{ todoData.description }}</div>
            </div>
            <div class="icon">
                <font-awesome-icon icon="fa-solid fa-trash" @click="deleteProject(todoData)" class="icon-styling" />
                <router-link :to="{ path: `/AddnewTodo/${todoData.id}` }">
                    <font-awesome-icon icon="fa-solid fa-pen" class="icon-styling" />
                </router-link>
                <div @click="changeStatus(todoData)">
                    <font-awesome-icon :icon="todoData.completed ? 'fas fa-check' : 'fas fa-check'"
                        :class="todoData.completed ? 'green-icon' : 'white-icon'" />
                </div>
            </div>
        </div>
    </div>
    <div class="noTodo" v-if="filteredTodo.length === 0">
        <p v-if="this.$route.path === '/viewall'">ADD TODO</p>
        <p v-else-if="this.$route.path === '/completed'">NO COMPLETED TODO</p>
        <p v-else-if="this.$route.path === '/ongoing'">NO ONGOING TODO</p>
    </div>
</template>

<script>
import projectHeader from '../components/ProjectHeader.vue'
const STORAGE_KEY = process.env.VUE_APP_STORAGE_KEY;

export default {
    name: 'HomePage',
    data() {
        return {
            todosItem: []
        }
    },
    components: {
        projectHeader,
    },
    created() {
        this.todosItem = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        console.log(this.todosItem)
    },
    computed: {
        filteredTodo() {
            if (this.$route.path === '/viewall') {
                return this.todosItem;
            } else if (this.$route.path === '/ongoing') {
                return this.todosItem.filter(todoData => !todoData.completed);
            } else if (this.$route.path === '/completed') {
                return this.todosItem.filter(todoData => todoData.completed);
            }
            return [];
        },

    },
    methods: {

        deleteProject(title) {
            const index = this.todosItem.indexOf(title);
            if (index !== -1) {
                this.todosItem.splice(index, 1);
            }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todosItem));
        },
        showDetails(todoData) {

            todoData.showDetail = !todoData.showDetail;

        },
        changeStatus(idforComplete) {
            const index = this.todosItem.indexOf(idforComplete);
            this.todosItem[index].completed = !this.todosItem[index].completed
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todosItem));
        }

    }

}
</script>

<style scoped>
.icon-styling {
    color: gray;
    font-size: 25px;
}

.noTodo {
    text-align: center;
    background-color: white;
    padding: 8rem;
    align-items: center;
    margin-top: 3rem;
    font-size: 50px;
    font-weight: 600;
    font-family: cursive;
    color: red;
}

.green {
    border-left: 10px solid green;

}

.green-icon .icon {
    color: green;
    font-size: 30px;
}

.white {
    border-left: 10px solid rgb(209, 104, 104);
}

.white-icon .icon {
    color: grey;
    font-size: 30px;
}

.projectBoxs {
    width: 80%;
    background-color: white;
    margin-top: 2rem;
    height: fit-content;
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 20px;
    margin-top: 2rem;
    border-radius: 1rem;
    cursor: pointer;
    inline-size: auto;
    padding: 2rem;
    display: flex;
    gap: 4%;

}

.display {
    height: fit-content;
    width: 100%;
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
    width: 70%;
    overflow: auto;
    text-align: left;
    height: auto;

}

.deatilHeading {
    font-size: 20px;
    margin-top: 0.8rem;
    font-weight: 500;
}

@media screen and (min-width: 120px) and (max-width: 427px) {
    .viewAll {
        font-size: 12px;
    }

    .deatilHeading {
        font-size: 10px;
    }

    .titleHeading {
        font-size: 13px;
    }

    .white-icon {
        font-size: 15px;
    }

    .green-icon {
        font-size: 15px;
    }

    .icon-styling {
        font-size: 15px;
    }

    .projectBoxs {
        padding: 1rem;
    }

    .noTodo {
        font-size: 14px;
    }
}
</style>
