import React,{Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

class MinApp extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {
        const {routes} = this.props
        return (
            <div className={'basis-max'}>
                <Switch>
                    {routes.map(item => {
                        if (item.redirect) {
                            return <Route exact path={item.path} render={() => <Redirect to={item.redirect} />} key={item.path} />
                        } else {
                            return <Route exact path={item.path} component={item.component} key={item.path} />
                        }
                    })}
                </Switch>
            </div>
        )
    }
}

export default MinApp
