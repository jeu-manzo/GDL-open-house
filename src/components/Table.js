import React, { Component } from 'react';
import firebase from '../config/FirestoreConfig';
import Students from '../data/students.json';

export default class Table extends Component {
    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Estudiante</th>
                        <th>Hora</th>
                        <th>Estatus</th>
                        <th>Nota</th>
                    </tr>
                    {Students.filter(student => {
                        return student.role === 'student'
                    }).map(student => {
                        return <tr key={student.id}><td>{student.name}</td></tr>
                    })}
                    {/* {firebase.firestore().collection('users').onSnapshot(snapshot => {
                        console.log(snapshot)
;                    })} */}
                </thead>
            </table>
        )
    }
}