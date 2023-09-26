<template>
    <div class="todoBox">
        <h3 class="title">TITLE</h3>
        <input class="titleBox" v-model="project.title" type="text">
        <div v-if="errorMessage.length != 0 && project.title.trim().length == 0" class="error">* please enter title</div>
        <h4 class="title">DETAILS</h4>
        <textarea class="detailBox" v-model="project.details" rows="4" cols="30"></textarea>
        <div v-if="errorMessage.length != 0 && project.details.trim().length == 0" class="error">* please enter details
        </div>

        <button v-if="typeof (this.$route.params.id) == 'string'" class="updatedTodo" @click="updateProject()">Update
            Project</button>
        <button v-else class="addTodo" @click="addTodo()">Add Project</button>
    </div>
</template>

<script>
const STORAGE_KEY = process.env.VUE_APP_STORAGE_KEY;

export default {

    name: 'AddnewTodo',
    data() {
        return {
            project: {
                title: '',
                details: '',
            },
            todos: [],
            errorMessage: [],
            submitButton: false,
            complete: false,
            editIndex: -1,
            index: this.$route.params.id,
        }
    },
    mounted() {
        this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        this.updateTitle();
    },
    methods: {
        updateTitle() {
            if (typeof (this.index) === 'string') {
                const id = this.$route.params.id;
                this.editIndex = this.todos.findIndex(todo => todo.id == id);
                this.project.title = this.todos[this.editIndex].title.trim();
                this.project.details = this.todos[this.editIndex].description.trim();
            }
        },
        updateProject() {
            if (this.project.title.trim().length == 0 || this.project.details.trim().length == 0) {
                this.errorMessage.push('titlenotpresent');
            }

            if (this.project.details.trim().length != 0 && this.project.title.trim().length != 0) {
                this.todos[this.editIndex].title = this.project.title;
                this.todos[this.editIndex].description = this.project.details;
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
                this.$router.push('/');
            }

        },
        addTodo() {
            if (this.project.title.trim().length == 0 || this.project.details.trim().length == 0) {
                this.errorMessage.push('titlenotpresent');
            }
            if (this.project.title.trim().length != 0 && this.project.details.trim().length != 0) {
                const id = Math.floor(Math.random() * 100000);
                this.todos.push({
                    'id': id,
                    'title': this.project.title,
                    'description': this.project.details,
                    'completed': this.complete,
                });
                this.project.title = '';
                this.project.details = '';
                this.errorMessage = ''
            }
            this.submitButton = true;

            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));

            if (this.errorMessage.length == 0) {
                this.$router.push('/');
            }

        }
    }
}
</script>

<style>
.error {
    color: red;
    font-size: 12px;
    width: 90%;
    text-align: left;
    margin-top: 1rem;
    margin-left: 2rem;
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

.addTodo {
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
