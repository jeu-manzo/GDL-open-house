
import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './styles/Navigation.css';


import Summary from './routerComponents/Summary';
import Attendance from './routerComponents/Attendance';
import Lists from './routerComponents/List';
import Login from './routerComponents/Login';
import Err from './routerComponents/Err';


function App() {
  return(
    <HashRouter className="router">
      <div className="navigation">
        {/* <Navigation /> */}
        <Switch>
          <Route path='/' component={Summary} exact/>
          <Route path='/attendance' component={Attendance} />
          <Route path='/lists' component={Lists} />
          <Route path='/login' component={Login} />
          <Route path='/summary' component={Summary} />

          <Route component={Err} />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App;
