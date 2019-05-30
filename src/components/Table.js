import React, { Component } from 'react';
import firebase from '../config/FirestoreConfig';
import Students from '../data/students.json';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            date: null
        };
    }

    handleDate= () => {
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
          'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const today = new Date();
        // const ampm = time + (today.getHours() >= 12 ? 'pm' : 'am');
        const day = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();
        const date = day + " de " + months[month] + ", " + year;
        console.log(date);
        this.setState({
            date: '30 de Mayo, 2019'
        })
    }
    
    componentDidMount() {
        this.handleDate();
        console.log(this.state.date);
        firebase.firestore().collection(this.state.date).get()
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
            this.setState({
                students
            });
        });
    }

    render() {
        return(
            this.state.students.map(student => {
                return (
                    <tr>
                        <td>{student.name}</td>
                        <td>{student.attendance}</td>
                        <td>{student.time}</td>
                        <td>{student.notes}</td>
                    </tr>
                )
            })
        )
    }
}