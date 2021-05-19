import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about-us",
        name: "About",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },

    {
        path: "/contact-us",
        name: "Contact",
        component: () =>
            import ( /* webpackChunkName: "contact" */ "../views/Contact.vue"),
    },
    {
        path: "/fees",
        name: "Fees",
        component: () =>
            import ( /* webpackChunkName: "contact" */ "../views/Fees.vue"),
    },
    {
        path: "/transactional-details",
        name: "Transactional-Details",
        component: () =>
            import ( /* webpackChunkName: "contact" */ "../views/TransDetails.vue"),
    },
    {
        path: "/services",
        name: "Services",
        component: () =>
            import ( /* webpackChunkName: "contact" */ "../views/Services.vue"),
    },
    {
        path: "/partnership",
        name: "Partnership",
        component: () =>
            import ( /* webpackChunkName: "contact" */ "../views/Partnership.vue"),
    },
    {
        path: "/publication",
        name: "Publication",
        component: () =>
            import ( /* webpackChunkName: "contact" */ "../views/Publication.vue"),
    },
    {
        path: "/mediation-laws",
        name: "Mediation-Laws",
        component: () =>
            import ( /* webpackChunkName: "contact" */ "../views/MedLaws.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;