import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import JobCategory from '@/views/JobCategory.vue';
import JobEntry from '@/views/JobEntry.vue';
import MemberLogin from '@/views/MemberLogin.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'MemberLogin',
    component: MemberLogin,
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
