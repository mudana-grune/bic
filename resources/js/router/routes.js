import Home from '../pages/Home';
import TentangKami from '../pages/TentangKami';


const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
    {
        path:'/tentang-kami',
        name: 'tentang.kami',
        component: TentangKami
    }

];

export default routes;
