import React from 'react';
import AttendanceHeader from '../components/AttendanceHeader';
import Qr from '../components/Qr';
import Navigation from './Navigation';
import firebase from '../config/FirestoreConfig';
import FormLogin from '../components/FormLogin';

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
          <div className="attendance">
            <Navigation />
            <AttendanceHeader />
            <Qr />
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
