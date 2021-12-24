import Home from '../../pages/Home';
import AppBase from '../../pages/_layouts/AppBase';

const frontEndRoutes = {
    path: '/',
    name: 'main',
    redirect: { name: 'home' },
    component: AppBase,

    children: [
        {
            path: 'home',
            name: 'home',
            component: Home,
        },
    ]
}


export default frontEndRoutes;
