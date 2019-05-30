import React, { Component } from 'react';
import firebase from '../config/FirestoreConfig';
import Students from '../data/students.json';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.ref= firebase.firestore().collection('users');
        this.unsubscribe = null;
        this.state= {
            students: []
        };
    }

    onCollectionUpdate = (snapshot) => {
        const students = [];
        snapshot.forEach((doc) => {
            const {name, time, attendance} = doc.data();
            students.push({
                key: doc.id,
                doc,
                name,
                time,
                attendance
            });
        });
        this.setState= ({
            students
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

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
                    {/* {Students.filter(student => {
                        return student.role === 'student'
                    }).map(student => {
                        return <tr key={student.id}><td>{student.name}</td></tr>
                    })} */}
                    {/* {firebase.firestore().collection('users').onSnapshot(snapshot => {
                        console.log(snapshot)
;                    })} */}
                </thead>
                <tbody>
                    {this.state.students.map(student =>
                    console.log(student)
                        )}
                </tbody>
            </table>
        )
    }
}