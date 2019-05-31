import React from 'react';
import AttendanceHeader from '../components/AttendanceHeader';
import Qr from '../components/Qr';
import Navigation from './Navigation';
import firebase from '../config/FirestoreConfig';
import FormLogin from '../components/FormLogin';
import '../styles/Summary.css';
import '../styles/Navigation.css';

class Attendance extends React.Component {
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
          <div className="summary">
            <Navigation className="navigation"/>
        <h1 className="summary__header" />
      </div><div className="summary__blank">
          <AttendanceHeader />
          <Qr />
        </div>
          </div>
        ) :
          (
            <FormLogin />
          )}
      </div>
    );
  }
}

export default Attendance
