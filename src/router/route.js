import Home from "../views/pages/home/Home";

const routes = [{
    path: '/',
    component: '',
    redirect: '/home',
    hidden: true,
    meta: {name: '', icon: ''}
}, {
    path: '/home',
    component: Home,
    meta: {name: '首页', icon: ''}
}]

export default routes
