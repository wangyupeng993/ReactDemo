import React,{Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class MinApp extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    // 设定默认值
    // 外部传值进来通过this.props.xxx获取并且不能被内部改变，只能通过外部改变
    static defaultProps = {title: '这是定义默认值！！！'}

    // 在render之前更新，改变state，如不改变则返回null
    static getDerivedStateFromProps (nextProps, nextState) {
        console.log('getDerivedStateFromProps ——> 改变state')
        return null
    }

    // 用于优化性能，返回一个Boolean值，true组件正在正常更新，false 后面的生命周期都不会执行，视图也就不会更新了
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate ——> 优化性能，比较值是否有改变')
        return true
    }

    // 获取虚拟DEMO结构计算结果，这时浏览器还未更新DEMO
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate ——> 获取虚拟DEMO结构计算结果，这时浏览器还未更新DEMO')
        return null
    }

    // 组件已经更新完成时调用
    componentDidUpdate(prevProps, prevState, snapshot) {}

    /*// 还未渲染DEMO
    componentWillMount () {
        console.log('componentWillMount ——> 还未渲染DEMO时执行')
    }*/

    // DEMO已经渲染完成了。只执行一次
    componentDidMount() {
        console.log('componentDidMount ——> DEMO已经渲染完成了')
    }

    //组件卸载和数据的销毁
    componentWillUnmount () {
        console.log('组件卸载和数据的销毁')
    }

    // 捕获子组件抛出的错误
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo,'error=====================')
    }

    render () {
        const {routes} = this.props
        return (
            <div className={'basis-max'}>
                <Switch>
                    {routes.map(item => {
                        if (item.redirect) {
                            return <Route exact path={item.path} render={
                                () => <Redirect to={item.redirect} />
                            } key={item.path} />
                        } else {
                            return <Route path={item.path} component={item.component} key={item.path} />
                        }
                    })}
                    <Redirect to={'/NotFound'} />
                </Switch>
            </div>
        )
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

// 通过connect 链接组件和redux数据，传递state数据和dispatch方法
export default connect(mapStateToProps,mapDispatchToProps)(MinApp)
