import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Title from "./components/title";

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '我是模块化组件！！！'
    }
  }
  handle = async () => {
    await this.setState({
      title: '我是title，我的值被更改了！！！'
    })
    await console.log(this.state.title)
  }
  render() {
    return (
        <Router>
          <React.Fragment>
            <div className="app-main">
              <Title title={this.state.title} /><br />
              <button onClick={this.handle} className='padding-lr-sm padding-tb-xs text-sm margin-tb-xs'>
                更改title值
              </button>
            </div>
          </React.Fragment>
        </Router>
    );
  }
}

export default App;
