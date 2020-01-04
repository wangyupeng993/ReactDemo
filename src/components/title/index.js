import React, { Component }  from 'react'
import PropTypes from 'prop-types'

class Title extends Component {
    constructor (props) {
        super(props)
        this.state = {
            n: 0
        }
        this.handle = this.handle.bind(this)
    }
    static defaultProps = {title: '这是定义默认值！！！'}

    handle () {
        console.log(123456789)
        console.log(this)
    }

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
        return (<React.Fragment>
            <p className='padding-lr-sm padding-tb-xs text-sl'>{this.state.n}</p>
            <button onClick={this.add} className='padding-lr-sm padding-tb-xs text-sm'>加1</button>
        </React.Fragment>)
    }
}

Title.propTypes = {
    title: PropTypes.string
}

export default Title;
