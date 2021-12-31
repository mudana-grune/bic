import Home from '../../pages/Home';
import AppBase from '../../pages/_layouts/AppBase';
import TentangKami from '../../pages/TentangKami';

const frontEndRoutes = {
    path: '/',
    name: 'main',
    redirect: { name: 'home' },
    component: () => import('../../pages/_layouts/AppBase'),

    children: [
        {
            path: 'home',
            name: 'home',
            component: () => import('../../pages/Home'),
            hidden: true,
        },
        {
            path: 'tentang-kami',
            name: 'tentang.kami',
            component: () => import('../../pages/TentangKami'),
            hidden: true
        }
    ]
}


export default frontEndRoutes;
