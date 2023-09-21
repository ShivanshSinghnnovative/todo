import { createWebHashHistory , createRouter } from "vue-router";
const AddnewProject = () => import('./components/AddnewProject.vue')


const routes=[
    {
        name:'AddnewProject',
        path:'/AddnewProject',
        component:AddnewProject
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
});
export default router;