<template>
    <div>
        <div class="displaybox" v-for="titled in titles" :key="titled">
            <div @click="showDetails(titled)" class="titleHeading"> {{ titled.title }}
                <div v-if="titled.showDetail" class="deatilHeading">
                    {{ titled.description }}
                </div>
            </div>
            <div class="icon">
                <font-awesome-icon icon="fa-solid fa-trash" @click="deletetitle(titled)" />
                
                <router-link  :to="{ path: `/UpdateTodo/${titled.id}`, query: { title: titled.title, description: titled.description } }"><font-awesome-icon icon="fa-solid fa-pen" /></router-link>
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
                'showDetail':false
            });
        }

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
        }

    }


}
</script>

<style>
.displaybox {
    width: 80%;
    height: fit-content;
    background-color: white;
    margin-bottom: 20px;
    margin-left: 3%;
    margin-top: 2rem;
    cursor: pointer;
    display: flex;
    padding: 2rem;
    display: flex;
    border-radius: .5rem;
    flex-direction: row;
    justify-content: space-between;

}

.icon {
    display: flex;
    gap: 20px;
    cursor: pointer;
}
.titleHeading{
    font-size: 30px;
    font-weight: 600;

}
.deatilHeading{
    font-size: 20px;
    margin-top: 0.8rem;
    font-weight: 500;
}
</style>