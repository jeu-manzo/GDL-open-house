import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import Students from '../data/students.json';
import Blank from '../data/blank.png';
import Check from '../data/check.png';
import Late from '../data/sad.png';
import '../styles/Attendance.css';
import firebase from '../config/FirestoreConfig';

class Qr extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 1500,
      greeting: '',
      result: Blank,
      time: ''
    }

    this.handleScan = this.handleScan.bind(this)
    this.handleAttendance = this.handleAttendance.bind(this);
    this.handleSaveData = this.handleSaveData.bind(this);
  }

  handleScan(data){
    const today = new Date();
    const hours = today.getHours() % 12;
    const minutes = today.getMinutes();
    const time = hours + ':' + (minutes < 10 ? '0' + minutes : minutes);

    this.setState({
      result: Blank,
      time: time,
      greeting: ''
    })

    if(data !== null){
      const student = Students.find(x => x.id === data);
      this.handleAttendance(today.getHours(), today.getMinutes(), student);
    }
  }

  handleAttendance(hours, minutes, student){
    const lateH = 8;
    const lateM = 10;
    const time = hours + ':' + (minutes < 10 ? '0' + minutes : minutes);
    let result = Blank;
    let attendance = '';
    if(hours === lateH && minutes <= lateM){
      result = Check;
      attendance = "✅";
    }
    else{
      result = Late;
      attendance = "⏲️";
    }

    this.handleSaveData(student, time, attendance);
    this.setState({
      result: result,
      greeting: "Hola, " + student.name
    })
  }

  handleSaveData(student, time, attendance){
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const today = new Date();
    const ampm = time + (today.getHours() >= 12 ? 'pm' : 'am');
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const date = day + " de " + months[month] + ", " + year;

    let db = firebase.firestore();
    db.collection(`${date}`).add({
      name: student.name,
      time: ampm,
      attendance: attendance,
      notes: "",
    }).then(() => {
      console.log('agregado');
    });
  }

  handleError(err){
    console.error(err)
  }

  render(){
    const previewStyle = {
      height: 300,
      width: 500,
    }

    return(
      <div className="attendance-qr">
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <div className="attendance-message">
          <img className="attendance-img" src={this.state.result} alt="img"></img>
          <h1 className="attendance-greeting">{this.state.greeting}</h1>
        </div>
      </div>
    )
  }
}

export default Qr;
