import React,{Component} from 'react';
import Bar from "./bar";

class Scrollbar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            vertical: '0%',
            horizontal: '0%',
            translateY: 'translateY(0)',
            translateX: 'translateX(0)',
        }
        this.scrollBar = React.createRef()
        this.wrap = React.createRef()
        this.thumbHorizontal = React.createRef()
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
           this.scrollUpdate()
       },50)
    }

    //组件卸载和数据的销毁
    componentWillUnmount () {}

    // 捕获子组件抛出的错误
    componentDidCatch(error, errorInfo) {}

    // 滚动条 宽、高 计算
    scrollUpdate = () => {
        const {scrollHeight,clientHeight,scrollWidth,clientWidth} = this.wrap.current
        const vertical = (clientHeight * 100 / scrollHeight)
        const horizontal = (clientWidth * 100 / scrollWidth)
        this.setState({
            vertical: `${vertical < 100 ? vertical: 0}%`,
            horizontal: `${horizontal < 100 ? horizontal: 0}%`,
        })
    }

    mousewheel = async () => {
        const {scrollTop,clientHeight,scrollLeft,clientWidth} = this.wrap.current
        const translateY = await ((scrollTop * 100) / clientHeight)
        const translateX = await ((scrollLeft * 100) / clientWidth)
        await this.setState({
            translateY: `translateY(${translateY}%)`,
            translateX: `translateX(${translateX}%)`
        })
    }

    render() {
        const {translateY,vertical,horizontal, translateX} = this.state
        return (<div ref={this.scrollBar} className={`scrollbar ${this.props.className}`} style={this.props.style}>
            <div ref={this.wrap} onScroll={this.mousewheel} className={'scrollbar__wrap padding-bottom-sm'}>
                {this.props.node}
            </div>

            <Bar wrap={this.wrap} vertical axis={'Y'} direction={'top'}
                 offset={'offsetHeight'} scroll={'scrollTop'}
                 update={this.scrollUpdate}
                 style={{transform: translateY,height: vertical}} />

            <Bar wrap={this.wrap} axis={'X'} direction={'left'}
                 offset={'offsetWidth'} scroll={'scrollLeft'}
                 update={this.scrollUpdate}
                 style={{transform: translateX,width: horizontal}} />
        </div>)
    }
}

export default Scrollbar
