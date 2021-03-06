import React,{Component} from 'react';
import {connect} from 'react-redux';

class Login extends Component {
    render () {
        return (<div className={'basis-max text-sm'}>登录页面</div>)
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

export default connect(mapStateToProps,mapDispatchToProps)(Login)
