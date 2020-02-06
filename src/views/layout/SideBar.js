import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class SideBar extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {
        const {routes} = this.props
        return (
            <ul className={'basis-xs bg-darkblue hidden'} style={{maxWidth: '220px'}}>
                {routes.filter(item => !item.hidden).map(item => {
                    return <li className={'padding-xs'} key={item.path}>
                        <NavLink className={'text-white'} to={item.path}>
                            {item.meta.name}
                        </NavLink>
                    </li>
                })}
            </ul>
        )
    }
}

export default SideBar
