<template>
<div class="todoBox">
    <h3 class="title">TITLE</h3>
    <input class="titleBox" v-model="project.updatedtitles" type="text">
    <div v-if="project.updatedtitles.trim().length == 0" class="error">* please enter title</div>
    <h4 class="title">DETAILS</h4>
    <textarea class="detailBox" v-model="project.updateddetails" rows="4" cols="30"></textarea>
    <div v-if="project.updateddetails.trim().length == 0" class="error">* please enter details</div>
    <button class="updatedTodo" @click="updateProject(index)">Update todo</button>
</div>
</template>

<script>
export default {
    name: 'UpdateTodo',
    data() {
        return {
            project: {
                updatedtitles: ``,
                updateddetails: '',
            },
            todos:[],
            editIndex:-1,
            index: this.$route.params.id
        }
    },
    mounted() {
        this.todos = JSON.parse(localStorage.getItem('vue-todo'));
        
        this.updateTitle();
       
    },
    methods: {
        updateTitle() {
            const id = this.$route.params.id;
            this.editIndex = this.todos.findIndex(todo => todo.id == id);
            this.project.updatedtitles = this.todos[this.editIndex].title.trim();
            this.project.updateddetails = this.todos[this.editIndex].description.trim();
        },
        updateProject() {
            if (this.project.updateddetails.trim().length != 0 && this.project.updatedtitles.trim().length != 0) {
                if (this.project.updatedtitles.length != 0 && this.project.updateddetails.length != 0) {
                    this.todos[this.editIndex].title = this.project.updatedtitles;
                    this.todos[this.editIndex].description = this.project.updateddetails;
                    localStorage.setItem('vue-todo', JSON.stringify(this.todos));
                    this.$router.push('/');
                }

            }
           
        }
    }
}
</script>

<style scoped>
.error {
    color: red;
    font-size: 12px;
    width: 90%;
    text-align: left;
    margin-top: 1rem;
    margin-left: 2rem;
}

.todoBox {
    background-color: white;
    width: 80%;
    height: 80%;
    margin: 2rem 10% 4rem 10%;
    padding-bottom: 2rem;
    border-radius: 1rem;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.title {
    font-size: 25px;
    width: 90%;
    text-align: left;
    margin-top: 2rem;
    padding-top: 1rem;
    margin-left: 2rem;
    color: grey;
}

.titleBox {
    border: none;
    border-bottom: 1px solid grey;
    width: 90%;
}

.detailBox {
    width: 90%;
    height: 9rem;
    font-size: 23px;
}

input {
    font-size: 30px;
}

.updatedTodo {
    background-color: rgb(78, 119, 78);
    padding: 1rem;
    margin: 1rem;
    font-size: 30px;
    border-radius: .5rem;
    border: none;
    color: white;
    cursor: pointer;
}

@media screen and (min-width: 120px) and (max-width: 427px) {
    .title {
        font-size: 18px;
    }

    .addTodo {
        font-size: 20px;
        padding: 1rem;
    }

    input {
        font-size: 17px;
    }

    .detailBox {
        font-size: 15px;
    }

    .updatedTodo {
        padding: .5rem;
        font-size: 20px;
    }
}
</style>
