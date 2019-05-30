import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './routerComponents/Home';
import Attendance from './routerComponents/Attendance';
import Lists from './routerComponents/List';
import Login from './routerComponents/Login';
import Err from './routerComponents/Err';
import Navigation from './routerComponents/Navigation';
import Counter from './routerComponents/Counter';

function App() {
    return(
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
              <Route path='/' component={Login} exact/>
              <Route path='/home' component={Home} exact/>
              <Route path='/attendance' component={Attendance} />
              <Route path='/lists' component={Lists} />
              <Route path='/login' component={Login} />
              <Route path='/counter' component={Counter} />
              <Route component={Err} />
            </Switch>
        </div>
      </BrowserRouter>
    )
}

export default App;
