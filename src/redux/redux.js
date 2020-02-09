import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import app from './app';
import user from './user';
import thunk from 'redux-thunk';

/*
* redux中有三个重要的部分：action、reducer、store(store)
* */

/*
* 如果想要改变一个reducer的值 需要使用dispatch派发一个action
*     action 需要两个参数
*        type： 通过type区分是对state做什么操作
*        payload： 传递的数据
* */

// 模块化 redux 进行合并
const Reducers = combineReducers({app, user})

// 创建一个storage
const store = createStore(
    Reducers,
    compose(
        applyMiddleware(...[thunk]),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store
