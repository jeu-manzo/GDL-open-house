import React, { Component } from 'react';
import firebase from '../config/FirestoreConfig';
import Summary from './Summary';
import FormLogin from '../components/FormLogin';

export default class Login extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
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
          <Summary />
          ) :
          (
          <FormLogin />
        )}
      </div>
    );
  }
}
