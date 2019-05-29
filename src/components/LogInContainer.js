import React, { Component } from 'react';
import fireBase from '../config/fireBase';
import Home from './Home';
import Login from './Login';

class LogInContainer extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fireBase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <Home />
        ) :
          (
            <Login />
          )}
      </div>
    );
  }
}

 export default LogInContainer;
