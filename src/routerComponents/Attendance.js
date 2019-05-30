import React from 'react';
import AttendanceHeader from '../components/AttendanceHeader';
import Qr from '../components/Qr';
import Navigation from './Navigation';


const Attendance = () => {
  return(
    <div className="attendance">
      <Navigation />
      <AttendanceHeader />
      <Qr />
    </div>
  )
}

export default Attendance;
