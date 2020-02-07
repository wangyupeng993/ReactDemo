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
}, {
    path: '/parent',
    meta: {name: '路由嵌套', icon: 'cuIcon-right'},
    children: [{
        path: '/parent/children',
        component: '',
        meta: {name: '子路由', icon: ''}
    }, {
        path: '/parent/children2',
        component: '',
        meta: {name: '子路由', icon: ''}
    }]
}, {
    path:'/abc',
    component: '',
    meta: {name: 'abc', icon: ''}
}]

export default routes
