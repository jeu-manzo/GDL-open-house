import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import Students from '../data/students.json';
import Check from '../data/check.png';
import Late from '../data/sad.png';

class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 1500,
      result: '',
      time: ''
    }

    this.handleScan = this.handleScan.bind(this)
    this.handleLate = this.handleLate.bind(this);
  }

  handleScan(data){
    const today = new Date();
    const hours = today.getHours() % 12;
    const minutes = today.getMinutes();
    const time = hours + ':' + (minutes < 10 ? '0' + minutes : minutes);

    this.setState({
      result: data,
      time: time
    })

    if(data !== null){
      const student = Students.find(x => x.id === data);
      const greeting = "Hola, " + student.name;
      console.log(greeting);
      this.handleLate(toString(today.getHours()));
    }
  }

  handleLate(time){
    const late = 8;
    let result = '';
    if(time.split(0, 2) <= late){
      result = Check;
    }
    else{
      result = Late;
    }
    this.setState({
      result: result
    })
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
      <div className="qr">
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <img src={this.state.result}></img>
      </div>
    )
  }
}

export default Test;
