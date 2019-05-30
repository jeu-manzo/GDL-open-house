import React from 'react';
import AttendanceHeader from '../components/AttendanceHeader';
import Qr from '../components/Qr';
import Navigation from './Navigation';


class Attendance extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
  return(
    <div className="attendance">
      <Navigation />
      <AttendanceHeader />
      <Qr />
    </div>
  )
}
}

export default Attendance;
