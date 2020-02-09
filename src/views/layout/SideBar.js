import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Transition} from 'react-transition-group';
import {connect} from 'react-redux';

class SideBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            parentURL: ''
        }
    }
    // 设定默认值
    // 外部传值进来通过this.props.xxx获取并且不能被内部改变，只能通过外部改变
    static defaultProps = {title: '这是定义默认值！！！'}

    // 在render之前更新，改变state，如不改变则返回null
    static getDerivedStateFromProps (nextProps, nextState) {
        return null
    }

    // 用于优化性能，返回一个Boolean值，true组件正在正常更新，false 后面的生命周期都不会执行，视图也就不会更新了
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextState.parentURL !== this.state.parentURL
    }

    // 获取虚拟DEMO结构计算结果，这时浏览器还未更新DEMO
    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null
    }

    // 组件已经更新完成时调用
    componentDidUpdate(prevProps, prevState, snapshot) {}

    /*// 还未渲染DEMO
    componentWillMount () {
        console.log('componentWillMount ——> 还未渲染DEMO时执行')
    }*/

    // DEMO已经渲染完成了。只执行一次
    componentDidMount() {}

    //组件卸载和数据的销毁
    componentWillUnmount () {}

    // 捕获子组件抛出的错误
    componentDidCatch(error, errorInfo) {}

    showChildRouter = (path) => {
        this.setState({
            parentURL:path
        })
    }

    render () {
        const {routes} = this.props
        const {parentURL} = this.state
        return (
            <ul className={'basis-xs bg-darkblue hidden'} style={{maxWidth: '220px'}}>
                {routes.filter(item => !item.hidden).map(item => {
                    return !item.children ? <li key={item.path} onClick={() => {
                        this.showChildRouter('')
                    }}>
                        <Transition timeout={0}>
                            <NavLink className={'text-grey block padding-xs'} to={item.path}
                                     activeClassName={'bg-cyan text-white'}>
                                {item.meta.name}
                            </NavLink>
                        </Transition>
                    </li> : <li className={'padding-xs text-grey pointer'} key={item.path}>
                        <p className={'flex padding-tb-xs'} onClick={() => {
                            this.showChildRouter(parentURL === '' ? item.path : '')
                        }}>
                            <span className={`basis-xl ${parentURL === item.path?'text-white': ''}`}>{item.meta.name}</span>
                            <Transition timeout={0} in={parentURL === item.path} enter={false} exit={false}>{
                                (status) => {
                                    return (<i className={`basis-xs text-sm ${item.meta.icon} flex items-center justify-center fade-rotate90-init fade-rotate90-${status}`}></i>)
                                }
                            }</Transition>
                        </p>
                        <Transition timeout={0} in={parentURL === item.path} enter={false} exit={false}>{
                                (status) => {
                                    return <p className={`fade-height-init fade-height-${status}`}>{
                                        item.children.map(child => {
                                            return <NavLink className={'text-grey block padding-xs'} to={child.path}
                                                            activeClassName={'bg-cyan text-white'} key={child.path}>
                                                {child.meta.name}
                                            </NavLink>
                                        })
                                    }</p>
                                }
                            }</Transition>
                    </li>
                })}
            </ul>
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
export default connect(mapStateToProps,mapDispatchToProps)(SideBar)
