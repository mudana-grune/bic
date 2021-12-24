import Vue from 'vue';
import VueRouter from 'vue-router';
import frontEndRoutes from './frontend';
Vue.use(VueRouter);

const routes = [
    frontEndRoutes,
    {
        name: 'catch_all',
        path: '*',
        redirect: { name: 'main' },
    },
]
const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let loginRoute = 'admin.login';
        await store.dispatch('checkAuth');
        const authInfo = store.state.info;
        if (!authInfo.status) {
            next({
                name: loginRoute,
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            next();
        }
    } else {
        next();
    }
})
export default router;
