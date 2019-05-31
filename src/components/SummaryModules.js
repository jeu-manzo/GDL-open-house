import React, { Component } from 'react';
import Students from '../data/students.json';
import Laboratoria from '../data/Laboratoria.jpg';
import firebase from '../config/FirestoreConfig';

export default class SummaryModules extends Component {
  constructor(props){
    super(props)
    this.state = {
      studentsTotal: 0,
      lates: 3,
      // lates: [1, 2, 3, 4],
      assistance: 3,
      // assistance: [1, 2, 3, 4],
      absences: [],
      total: 0
    };
  }

  componentDidMount(){
    this.handleStudentsTotal();
    this.handleDayStats();
  }

  handleStudentsTotal() {
    const students = Students.filter(x => x.role === "student");
    this.setState({
      studentsTotal: students
    })
  }

  handleDayStats() {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const date = day + " de " + months[month] + ", " + year;

    firebase.firestore().collection(date).get()
    .then(querySnapshot => {
        let students = [];
        querySnapshot.forEach( doc => {
            let { name, attendance, time, notes } = doc.data();
            students.push({
                name,
                time,
                attendance,
                notes
            });
        });
        // this.setState({
        //     students
        // });
    });
  }

  render() {
    return (
      <div className="summary__blank">
        <div className="summary__modules">
          <h1>Hoy llegaron <p>{this.state.assistance} de {this.state.studentsTotal.length - 4}</p> estudiantes</h1>
          <h1>Ausencias <p>{this.state.absences.length}</p></h1>
          <h1>Retardos <p>{this.state.lates}</p></h1>
          <h1>Drop out <p>3</p></h1>
        </div>
        <img className="summary__img" src={Laboratoria} />
      </div>
    );
  }
}
