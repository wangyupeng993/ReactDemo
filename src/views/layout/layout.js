import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import SideBar from "./SideBar";
import MinApp from "./MinApp";
import routes from "../../router/route";

class App extends Component {
    render () {
        return <React.Fragment>
            <Router>
                <React.Fragment>
                    <Header />
                    <div className={'flex'} style={{height: '93.7%'}}>
                        <SideBar routes={routes} />
                        <MinApp routes={routes} />
                    </div>
                </React.Fragment>
            </Router>
        </React.Fragment>
    }
}
export default App
