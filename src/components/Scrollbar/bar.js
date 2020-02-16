import React, {Component} from 'react';
import {on,off} from "../../api/dom";
import {BAR_MAP} from "./utils";

class Bar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            cursorDown: false
        }
        this.thumb = React.createRef()
    }

    // 设定默认值
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

    // DEMO已经渲染完成了。只执行一次
    componentDidMount() {}

    //组件卸载和数据的销毁
    componentWillUnmount () {
        off(document,'mouseup',this.mouseUpDocumentHandler)
    }

    // 捕获子组件抛出的错误
    componentDidCatch(error, errorInfo) {}

    bar = () => {
        const {vertical} = this.props
        return vertical ? BAR_MAP['vertical']:BAR_MAP['horizontal']
    }

    clickThumbHandler = (ev) => {
        const {offset,axis,direction} =  this.bar()
        if (ev.ctrlKey || ev.button === 2) return;
        this.startDrag(ev)
        this[axis] = (ev.currentTarget[offset] - (ev[`client${axis}`] - ev.currentTarget.getBoundingClientRect()[direction]))
    }

    // 点击滚动条时追踪
    clickTrackHandler = async (ev) => {
        const {axis,direction,offset,scroll} = this.bar()
        // 取绝对值：Math.abs（元素的边距 - 事件发生时的坐标）
        const clientOffset = Math.abs(ev.target.getBoundingClientRect()[direction] - ev[`client${axis}`])
        // 获取scrollbar__bar的宽 、 高
        const thumbHalf = await (this.thumb.current[offset] / 2)
        const thumbPositionPercentage = await ((clientOffset - thumbHalf) * 100 / this.props.wrap.current[offset])
        this.props.wrap.current[scroll] = await (thumbPositionPercentage * this.props.wrap.current[offset] / 100)
    }

    // 开始拖拽
    startDrag = async (ev) => {
        await ev.stopPropagation()
        await this.setState({
            cursorDown: true
        })
        await on(document, 'mousemove', this.mouseMoveDocumentHandler)
        await on(document, 'mouseup', this.mouseUpDocumentHandler)
        document.onselectstart = () => false
    }

    // 鼠标开始移动
    mouseMoveDocumentHandler = (ev) => {
        if (!this.state.cursorDown) return false
        const {axis,direction,scroll,scrollSize} = this.bar()
        const prevPage = this[axis]
        if (!prevPage) return false
        const offset = ((this.props.wrap.current.getBoundingClientRect()[direction] - ev[`client${axis}`]) * -1)
        const thumbClickPosition = (this.thumb.current[this.bar().offset] - prevPage)
        const thumbPositionPercentage = ((offset - thumbClickPosition) * 100 / this.props.wrap.current[ this.bar().offset])
        this.props.wrap.current[scroll] = (thumbPositionPercentage * this.props.wrap.current[scrollSize] / 100)
    }

    // 鼠标抬起
    mouseUpDocumentHandler = async (ev) => {
        this[this.props.axis] = 0
        await this.setState({
            cursorDown: false
        })
        await off(document,'mousemove', this.mouseMoveDocumentHandler)
        document.onselectstart = null
    }

    render() {
        const {style,vertical} = this.props
        return (<div className={`scrollbar__bar is-${vertical?'vertical':'horizontal'}`}
                     onMouseDown={this.clickTrackHandler}>
            <div ref={this.thumb} className={'scrollbar__thumb'} style={style}
                 onMouseDown={this.clickThumbHandler}></div>
        </div>)
    }
}

export default Bar
