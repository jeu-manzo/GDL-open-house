import React from 'react';
import AttendanceHeader from '../components/AttendanceHeader';
import Qr from '../components/Qr';

const Attendance = () => {
  return(
    <div className="attendance">
      <AttendanceHeader />
      <Qr />
    </div>
  )
}

export default Attendance;
