import React, { Component } from 'react';
import '../styles/Attendance.css';

class AttendanceHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: ''
    }
    this.handleDate = this.handleDate.bind(this)
    this.handleTime = this.handleTime.bind(this)
  }

  componentDidMount(){
    this.interval = setInterval(this.handleTime, 1000);
    this.handleDate();
    this.handleTime();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleTime(){
    const today = new Date();
    const ampm = today.getHours() >= 12 ? 'pm' : 'am';
    const hours = today.getHours() % 12;
    const minutes = today.getMinutes();
    const time = hours + ':' + (minutes < 10 ? '0' + minutes + ampm : minutes + ampm);
    this.setState({
      time: "Hora: " + time
    })
  }

  handleDate(){
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const date = day + " de " + months[month-1] + ", " + year;

    this.setState({
      date: "Fecha: " + date
    })
  }

  render() {

    return (
      <div>
        <h1 className="attendance-header">{this.state.date}</h1>
        <h1 className="attendance-header">{this.state.time}</h1>
      </div>
    );
  }
};

export default AttendanceHeader;
