import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import SideBar from "./SideBar";
import MinApp from "./MinApp";
import routes from "../../router/route";
import {connect} from 'react-redux';

class App extends Component {
    render () {
        return <React.Fragment>
            <Router>
                <React.Fragment>
                    <Header />
                    <div className={'flex'} style={{height: '93.7%'}}>
                        <SideBar routes={routes} />
                        <MinApp routes={routes} />
                    </div>
                </React.Fragment>
            </Router>
        </React.Fragment>
    }
}

/*
* 将需要的state的节点注入到与此视图数据相关的组件上
* state：redux 数据
* props：外部组件或者父组件传递过来的数据
 */
const mapStateToProps = (state,props) => state

// 将需要绑定的响应事件注入到组件上
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
