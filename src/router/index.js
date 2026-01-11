import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue');
const AboutView = () => import('@/views/AboutView.vue');
const ProjectView = () => import('@/views/ProjectView.vue');
const ProjectDetails = () => import("@/views/ProjectDetails.vue");
const ExperienceView = () => import('@/views/ExperienceView.vue');
const ContactView = () => import('@/views/ContactView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/projects',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/project/:id',
      name: 'ProjectDetail',
      component: ProjectDetails,
      props: true,
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router