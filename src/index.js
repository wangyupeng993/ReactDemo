import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/icon.css';
import './assets/css/main.css';
import './assets/css/public.css';
import './assets/css/style.css';
import './assets/css/transition.css';
import App from './views/layout/layout';
import {Provider} from 'react-redux';
import store from './redux/redux';

import * as serviceWorker from './serviceWorker';

// 通过provider 把react 和redux 链接，store 传递到react项目中
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
