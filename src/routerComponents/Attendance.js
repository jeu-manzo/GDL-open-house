import React from 'react';
import AttendanceHeader from '../components/AttendanceHeader';
import Qr from '../components/Qr';
import Navigation from './Navigation';
import '../styles/Summary.css';
import '../styles/Navigation.css';


const Attendance = () => {
  return(
    <div>
      <div className="summary">
        <Navigation className="navigation"/>
        <h1 className="summary__header" />
      </div>
      <div>
        <div className="summary__blank">
          <AttendanceHeader />
          <Qr />
        </div>
      </div>
    </div>
  )
}

export default Attendance;
