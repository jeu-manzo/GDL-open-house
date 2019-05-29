import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import Students from '../data/students.json';
import Check from '../data/check.png';
import Late from '../data/sad.png';
import '../styles/Attendance.css';
import db from '../config/FirestoreConfig';

class Qr extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 1500,
      greeting: '',
      result: '',
      time: ''
    }

    this.handleScan = this.handleScan.bind(this)
    this.handleLate = this.handleLate.bind(this);
    this.handleSaveData = this.handleSaveData.bind(this);
  }

  handleScan(data){
    const today = new Date();
    const hours = today.getHours() % 12;
    const minutes = today.getMinutes();
    const time = hours + ':' + (minutes < 10 ? '0' + minutes : minutes);

    this.setState({
      result: data,
      time: time,
      greeting: ''
    })

    if(data !== null){
      const student = Students.find(x => x.id === data);
      this.handleLate(today.getHours(), today.getMinutes(), student);
    }
  }

  handleLate(hours, minutes, student){
    const lateH = 8;
    const lateM = 10;
    let result = '';
    let attendance = '';
    if(hours === lateH && minutes <= lateM){
      result = Check;
      attendance = "✅";
    }
    else{
      result = Late;
      attendance = "⏲️";
    }

    this.handleSaveData(student, hours, minutes, attendance);
    this.setState({
      result: result,
      greeting: "Hola, " + student.name
    })
  }

  handleSaveData(student, hours, minutes, attendance){
    const time = hours + ":" + minutes;

    db.collection("users").add({
      name: student,
      time: time,
      attendance: attendance
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
          <img className="attendance-img" src={this.state.result} ></img>
          <h1 className="attendance-greeting">{this.state.greeting}</h1>
        </div>
      </div>
    )
  }
}

export default Qr;
