import React, { Component }  from 'react'
import PropTypes from 'prop-types'

class Title extends Component {
    constructor (props,context) {
        super(props,context)
        this.state = {
            n: 0
        }
        // 更改this指向
        this.handle = this.handle.bind(this)
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

    handle () {
        console.log(123456789)
        console.log(this)
    }
    //使用箭头函数防止this指向更改
    handle2 = () => {
        console.log('使用箭头函数防止this指向更改！！！')
        console.log(this)
    }

    add = async () => {
        await this.setState({
            n: this.state.n + 1
        })
        await console.log(this.state.n)
    }

    render () {
        return (
            <React.Fragment>
                <p className='padding-lr-sm padding-tb-xs text-sl'>{this.props.title}</p>
                <p className='padding-lr-sm padding-tb-xs text-sl'>{this.state.n}</p>
                <button onClick={this.add} className='padding-lr-sm padding-tb-xs text-sm'>加1</button>
            </React.Fragment>
        )
    }
}

// 属性类型
Title.propTypes = {
    title: PropTypes.string
}

export default Title;
