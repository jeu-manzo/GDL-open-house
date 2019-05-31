
import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Summary from './routerComponents/Summary';
import Email from './routerComponents/Email';
import Attendance from './routerComponents/Attendance';
import Lists from './routerComponents/List';
import Login from './routerComponents/Login';
import Err from './routerComponents/Err';

function App() {
    return(
      <HashRouter>
        <div>
            <Switch>
              <Route path='/' component={Summary} exact/>
              <Route path='/attendance' component={Attendance} exact />
              <Route path='/lists' component={Lists} exact/>
              <Route path='/login' component={Login} exact/>
              <Route path='/summary' component={Summary} exact/>
              <Route path='/reset-password' component={Email} exact/>
              <Route component={Err} />
            </Switch>
        </div>
      </HashRouter>
    )
}

export default App;
