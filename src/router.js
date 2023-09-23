import { createWebHashHistory , createRouter } from "vue-router";
const AddnewProject = () => import('./components/AddnewProject.vue')
const LandingPage =()=> import('./components/LandingPage.vue')
const UpdateTodo =() => import('./components/UpdateTodo.vue')

const routes=[
    {
        name:'LandingPage',
        path:'/',
        component:LandingPage
    },
    {
        name:'AddnewProject',
        path:'/addnewproject',
        component:AddnewProject
    },
    {
        name:'UpdateTodo',
        path:'/UpdateTodo/:id',
        component:UpdateTodo
    },
    {
        name:'OngoingPage',
        path:'/ongoing',
        component:LandingPage
    },
    {
        name:'CompletedPage',
        path:'/completed',
        component:LandingPage
    },
    
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
});
export default router;