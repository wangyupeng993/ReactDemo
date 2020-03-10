import React,{Component} from 'react';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {}
        this.header = React.createRef()
    }
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

    // DEMO已经渲染完成了。只执行一次
    componentDidMount() {
        this.props.onRef(this.header)
    }

    //组件卸载和数据的销毁
    componentWillUnmount () {}

    // 捕获子组件抛出的错误
    componentDidCatch(error, errorInfo) {}

    render () {
        return <div ref={this.header} className={'bg-darkblue padding-sm text-white'}>头部</div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Header)
