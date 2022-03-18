import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import JobCategory from '@/views/JobCategory.vue';
import JobEntry from '@/views/JobEntry.vue';
import UserLogin from '@/views/UserLogin.vue';
import UserRegistration from '@/views/UserRegistration.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/user-login',
    name: 'UserLogin',
    component: UserLogin,
  },
  {
    path: '/user-registration',
    name: 'UserRegistration',
    component: UserRegistration,
  },
  {
    path: '/',
    name: 'JobCategory',
    component: JobCategory,
  },
  {
    path: '/job-entry',
    name: 'JobEntry',
    component: JobEntry,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;