//importo le funzioni di Vue Router
import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import ContactPage from "../pages/ContactPage.vue";
import DetailPage from "../pages/DetailPage.vue";
import KillerPage from "../pages/KillerPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: '/contact', name: 'contact', component: ContactPage},
    { path: "/killers/:id", name: "killer-detail", component: DetailPage },
    { path: "/killers", name: "killersPage", component: KillerPage },
  ],
});

export { router };
