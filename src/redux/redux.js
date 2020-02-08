import {createStore} from 'redux';
/*
* redux中有三个重要的部分：action、reducer、store(store)
* */
const counterRedux = (state = {count: 1},action) => {
    switch (action.type) {
        case 'COUNT_ADD':
            return {...state, count: state.count + 1}
        default:
            return state
    }
}

// 创建一个storage
const store = createStore(
    counterRedux,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch({
    type: 'COUNT_ADD',
    payload: {}
})

/*
* 如果想要改变一个reducer的值 需要使用dispatch派发一个action
*     action 需要两个参数
*        type： 通过type区分是对state做什么操作
*        payload： 传递的数据
* */

export default store
