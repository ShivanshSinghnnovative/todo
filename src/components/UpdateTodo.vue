<template>
    <div class="todoBox">
        <h3 class="title">TITLE</h3>
        <input class="titleBox" v-model="titlees" type="text">
        <div v-if="titlees.length == 0" class="error">* please enter title</div>
        <h4 class="title">DETAILS</h4>
        <textarea class="detailBox" v-model="detailss" rows="4" cols="30"></textarea>
        <div v-if="detailss.length == 0" class="error">* please enter details</div>
        <button class="updatedTodo" @click="updateProject(index)">Update todo</button>


    </div>
</template>

<script>

export default {
    name: 'UpdateTodo',
    data() {
        return {
            titlees: ``,
            detailss: '',
            index: this.$route.params.id
        }
    },
    created() {
        this.updateTitle();
    },
    methods: {
        updateTitle() {
            const id = this.$route.params.id;
            let todos = JSON.parse(localStorage.getItem('vue-todo'));
            const editIndex = todos.findIndex(todo => todo.id == id);
            this.titlees = todos[editIndex].title;
            this.detailss = todos[editIndex].description;
        },
        updateProject(id) {
            let todos = JSON.parse(localStorage.getItem('vue-todo'));

            console.log(todos)
            console.log(id)

            const index = todos.findIndex(todo => todo.id == id);

            console.log(index)
            if(this.titlees.length!=0 && this.detailss.length!=0){
            todos[index].title = this.titlees;
            todos[index].description = this.detailss;
            localStorage.setItem('vue-todo', JSON.stringify(todos));
            console.log("jf")

            this.$router.push('/');}
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
</style>