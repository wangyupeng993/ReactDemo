import React,{Component} from 'react';

class Scrollbar extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    static defaultProps = {node: '',className:''}
    render() {
        return (<div className={`scrollbar ${this.props.className}`}>{this.props.node}</div>)
    }
}

export default Scrollbar
