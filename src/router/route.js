import Home from "../views/pages/home/Home";
import Login from '../views/login/login';
import NotFound from '../views/NotFound/NotFound';

const routes = [{
    path: '/',
    component: '',
    redirect: '/home',
    hidden: true,
    meta: {name: '', icon: ''}
}, {
    path: '/login',
    hidden: true,
    component: Login,
    meta: {name: '登录', icon: ''}
}, {
    path: '/home',
    component: Home,
    meta: {name: '首页', icon: ''}
},{
    path: '/NotFound',
    hidden: true,
    component: NotFound,
    meta: {name: '404', icon: ''}
}]

export default routes
