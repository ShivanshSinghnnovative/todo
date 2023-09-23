<template>
    <div class="todoBox">
        <h3 class="title">TITLE</h3>
        <input class="titleBox" v-model="title" type="text">
        <div v-if="errorMessage.lenght != 0 && title.length == 0" class="error">* please enter title</div>
        <h4 class="title">DETAILS</h4>
        <textarea class="detailBox" v-model="details" rows="4" cols="30"></textarea>
        <div v-if="errorMessage.lenght != 0 && details.length == 0" class="error">* please enter details</div>
        <button class="addTodo" @click="addTodo()">Add todo</button>
    </div>
</template>
<script>

const STORAGE_KEY = 'vue-todo';
export default {

    name: 'AddnewProject',
    data() {
        return {
            title: '',
            details: '',
            todos : [],
            errorMessage: [],
            submitButton: false,
            uncomplete:false
            
        }
    },
    created() {
        this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')     
    },
    methods: {
        addTodo() {
            if (this.title.length == 0) {
                this.errorMessage.push('titlenotpresent');
            }
            if (this.details.length == 0) {
                this.errorMessage.push('error');
            }
            if(this.title.length != 0 && this.details.length != 0){
            const id = Math.floor(Math.random()*100000); 
            this.todos.push({
                'id':id,
                'title': this.title,
                'description': this.details,
                'uncompleted':this.uncomplete,
            });
            this.title = '';
            this.details = '';
        }
            this.submitButton = true;
            
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));

            console.log(this.todos)
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
</style>