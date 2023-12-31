import { createWebHashHistory, createRouter } from "vue-router";
const AddnewTodo = () => import("./pages/AddnewProject.vue");
const HomePage = () => import("./pages/HomePage.vue");
const NotFound = () => import("./components/NotFound.vue");

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
    redirect: "/viewall",
    children: [
      {
        name: "OngoingPage",
        path: "ongoing",
        component: HomePage,
      },
      {
        name: "ViewAll",
        path: "viewall",
        component: HomePage,
      },
      {
        name: "CompletedPage",
        path: "completed",
        component: HomePage,
      },
    ],
  },
  {
    name: "AddnewTodo",
    path: "/addnewtodo",
    component: AddnewTodo,
  },
  {
    name: "UpdateTodo",
    path: "/addnewtodo/:id",
    component: AddnewTodo,
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
