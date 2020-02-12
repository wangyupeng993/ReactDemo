import React,{Component} from 'react';

class Scrollbar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            vertical: '0%',
            horizontal: 0,
            translateY: 'translateY(0)',
            translateX: 'translateX(0)',
        }
        this.scrollBar = React.createRef()
        this.scroll = React.createRef()
    }
    static defaultProps = {
        node: '',
        className:'',
        style:{}
    }
    // 在render之前更新，改变state，如不改变则返回null
    static getDerivedStateFromProps (nextProps, nextState) {
        return {...nextState}
    }

    // 用于优化性能，返回一个Boolean值，true组件正在正常更新，false 后面的生命周期都不会执行，视图也就不会更新了
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true
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
    componentDidMount() {
       setTimeout(() => {
           const Viewport = this.scrollBar.current.offsetHeight
           const scrollHeight = this.scroll.current.scrollHeight
           const vertical = Math.ceil((Viewport / scrollHeight) * 100)
           this.setState({vertical: `${vertical}%`})
       },50)
    }

    //组件卸载和数据的销毁
    componentWillUnmount () {}

    // 捕获子组件抛出的错误
    componentDidCatch(error, errorInfo) {}

    mousewheel = async () => {
        const scrollTop = this.scroll.current.scrollTop
        await this.setState({translateY: `translateY(${scrollTop}px)`})
    }

    render() {
        const {translateY,vertical} = this.state
        return (<div ref={this.scrollBar} className={`scrollbar ${this.props.className}`} style={this.props.style}>
            <div ref={this.scroll} onScroll={this.mousewheel} className={'scrollbar__wrap padding-bottom-sm'}>
                {this.props.node}
            </div>
            <div className={'scrollbar__bar is-horizontal'}>
                <div className={'scrollbar__thumb'}></div>
            </div>
            <div className={'scrollbar__bar is-vertical'}>
                <div className={'scrollbar__thumb'} style={{
                    height: vertical,
                    transform: translateY
                }}></div>
            </div>
        </div>)
    }
}

export default Scrollbar
