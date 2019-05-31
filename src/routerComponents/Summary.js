import React, { Component } from 'react';
import firebase from '../config/FirestoreConfig';
import FormLogin from '../components/FormLogin';
import Navigation from './Navigation';
import SummaryModules from '../components/SummaryModules';
import '../styles/Summary.css';
import '../styles/Navigation.css';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: null,
    });
  }

  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
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
      <div className='App'>
        {this.state.user ? (
          <div className="summary">
            <Navigation className="navigation" />
            <h1 className="summary__header">¡Bienvenidas!</h1>
            <SummaryModules />
          </div>
        ) : (
            <FormLogin />
          )}
      </div>
    )
  }
}