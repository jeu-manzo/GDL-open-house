import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Email from './routerComponents/Email';
import Summary from './routerComponents/Summary';
import Attendance from './routerComponents/Attendance';
import Lists from './routerComponents/List';
import Login from './routerComponents/Login';
import Err from './routerComponents/Err';
import './styles/Navigation.css';
// import Navigation from './routerComponents/Navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      change: 0,
    }
  }
  render() {
    return(
      <HashRouter>
        <div className="div-app">
            {/* <Navigation /> */}
            <Switch>
              <Route path='/' component={Summary} exact/>
              <Route path='/attendance' component={Attendance} />
              <Route path='/lists' component={Lists} />
              <Route path='/login' component={Login} />
              <Route path='/reset-password' component={Email} />
              <Route component={Err} />
            </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App;
