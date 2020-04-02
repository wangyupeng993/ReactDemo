import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Header from './Header';
import SideBar from "./SideBar";
import MinApp from "./MinApp";
import Scrollbar from "../../components/Scrollbar/Scrollbar";
import routes from "../../router/route";
import {connect} from 'react-redux';

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            offset: 0,
            fadeIn: false
        }
        this.header = React.createRef()
        this.container = React.createRef()
    }
    // 在render之前更新，改变state，如不改变则返回null
    static getDerivedStateFromProps (nextProps, nextState) {
        return {...nextState}
    }

    // 用于优化性能，返回一个Boolean值，true组件正在正常更新，false 后面的生命周期都不会执行，视图也就不会更新了
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return {...nextState}
    }

    // 获取虚拟DEMO结构计算结果，这时浏览器还未更新DEMO
    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null
    }

    // 组件已经更新完成时调用
    componentDidUpdate(prevProps, prevState, snapshot) {}

    // DEMO已经渲染完成了。只执行一次
    componentDidMount() {}

    //组件卸载和数据的销毁
    componentWillUnmount () {}

    // 捕获子组件抛出的错误
    componentDidCatch(error, errorInfo) {}

    render () {
        const {pathname} = this.props.location
        return <React.Fragment>{
            pathname !== '/login' && pathname !== '/NotFound' ? <React.Fragment>
                <div className={'app-main flex direction-column'}>
                    <Header onRef={ header => this.header = header} />
                    <div ref={this.container} className={'flex hidden flex-grow-min'}>
                        <Scrollbar className={'basis-xs bg-darkblue'}
                                   style={{maxWidth: '220px'}}
                                   node={<SideBar routes={routes} />} />
                        <Scrollbar className={'basis-max'} node={ <MinApp routes={routes} />} />
                    </div>
                </div>
            </React.Fragment>:<React.Fragment>
                <Scrollbar className={'basis-max'} node={ <MinApp routes={routes} />} />
            </React.Fragment>}
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
