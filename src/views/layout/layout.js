import React, {Component} from 'react';
// import {BrowerRouter, Router,Route} from 'react-router-dom';
import Header from './Header'
import SideBar from "./SideBar";
import MinApp from "./MinApp";
class App extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return <React.Fragment>
            <Header />
            <div className='flex app-main'>
                <SideBar />
                <MinApp />
            </div>
        </React.Fragment>
    }
}
export default App
