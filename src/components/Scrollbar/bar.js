import React, {Component} from 'react';

class Bar extends Component {
    constructor (props) {
        super(props)
        this.state = {}

        this.thumb = React.createRef()
        console.log(this.props)
    }
    static defaultProps = {}

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
    componentDidMount() {}

    //组件卸载和数据的销毁
    componentWillUnmount () {}

    // 捕获子组件抛出的错误
    componentDidCatch(error, errorInfo) {}

    clickThumbHandler = (ev) => {}

    // 点击滚动条时追踪
    clickTrackHandler = async (ev) => {
        const {axis,direction,offset,scroll} = this.props

        // 获取元素的边距以及鼠标发生事件时的坐标
        const clientOffset = Math.abs(ev.target.getBoundingClientRect()[direction] - ev[`client${axis}`])
        // 获取scrollbar__bar的宽 / 高
        const thumbHalf = await (this.thumb.current[offset] / 2)
        const thumbPositionPercentage = ((clientOffset - thumbHalf) * 100 / this.props.wrap.current[offset])
        this.props.wrap.current[scroll] = (thumbPositionPercentage * this.props.wrap.current[offset] / 100)
    }

    render() {
        const {style,vertical} = this.props
        return (<div className={`scrollbar__bar is-${vertical?'vertical':'horizontal'}`}
                     onMouseDown={this.clickTrackHandler} >
            <div ref={this.thumb} className={'scrollbar__thumb'} style={style}></div>
        </div>)
    }
}

export default Bar
