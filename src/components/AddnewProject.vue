<template>
    <div class="projectBox">
        <h3 class="title">TITLE</h3>
        <input class="titleBox" v-model="titlee" type="text">
        <div v-if="errorMessage.lenght != 0 && titlee.length == 0" class="error">* please enter title</div>
        <h4 class="title">DETAILS</h4>
        <textarea class="detailBox" v-model="details" rows="4" cols="30"></textarea>
        <div v-if="errorMessage.lenght != 0 && details.length == 0" class="error">* please enter details</div>
        <button class="updateProject" @click="addProject()">Add todo</button>


    </div>
</template>
<script>

const STORAGE_KEY = 'vue-todo';
export default {

    name: 'AddnewProject',
    data() {
        return {
            titlee: '',
            details: '',
            todos : [],
            errorMessage: [],
            submitButton: false,
            
        }
    },
    created() {
        this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        
    },
    methods: {
        addProject() {
            if (this.titlee.length == 0) {
                this.errorMessage.push('titlenotpresent');
            }
            if (this.details.length == 0) {
                this.errorMessage.push('error');
            }
            if(this.titlee.length != 0 && this.details.length != 0){
            const id = Math.floor(Math.random()*100000); 
            this.todos.push({
                'id':id,
                'title': this.titlee,
                'description': this.details
            });
            this.titlee = '';
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
    text-align: left;
    margin-left: 2rem;
}

.projectBox {
    background-color: white;
    width: 80%;
    height: 80%;
    margin: 2rem 10% 4rem 10%;
    padding-bottom: 2rem;
    border-radius: 1rem;

}

.title {
    font-size: 25px;
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
    font-size: 22px;
}

.updateProject {
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