import React, { Component } from 'react';
import firebase from '../config/FirestoreConfig';
// import registerServiceWorker from '../serviceWorker';
// import Dropdown from '../components/Dropdown';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            date: null
        };
    }

    componentDidMount() {
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
          'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();
        const date = day + " de " + months[month] + ", " + year;
        // console.log(date);
        // console.log(this.state.date);
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
            this.setState({
                students
            });
        });
    }

    render() {
        return(
            this.state.students.map((student, i) => {
                return (
                    <tr key={student.name + '_' + i}>
                        <td>{student.name}</td>
                        <td>{student.attendance}</td>
                        <td>{student.time}</td>
                        {/* <td>{student.notes}</td> */}
                    </tr>
                )
            })
        )
    }
}