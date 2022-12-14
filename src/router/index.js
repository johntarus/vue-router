import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Jobs from '../views/jobs/Jobs.vue';
import NotFound from '../views/NotFound.vue';
import JobsDetails from '../views/jobs/JobsDetails.vue';

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/about', name: 'About', component: About },
	{ path: '/jobs', name: 'Jobs', component: Jobs },
	{ path: '/:catchAll(.*)', name: '404', component: NotFound },
	{
		path: '/jobs/:id',
		name: 'JobsDetails',
		component: JobsDetails,
		props: true,
	},
	{ path: '/all-jobs', redirect: '/jobs' },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
