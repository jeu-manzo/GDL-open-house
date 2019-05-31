import React, { Component } from 'react';
import firebase from '../config/FirestoreConfig';
// import { Link } from 'react-router-dom';

export default class TableTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cosas: []
        };
    }

    componentDidMount() {
        firebase.firestore().collection('cosas').get()
        .then(querySnapshot => {
            let cosas = [];
            querySnapshot.forEach( doc => {
                let { name, attendance, time } = doc.data();
                // cosa.id = doc.id;
                cosas.push({
                    name,
                    attendance,
                    time
                });
            });
            this.setState({
                cosas
             });
        });
    }

    render() {
        return(
            <div>
                {this.state.cosas.map(cosa =>
                    // console.log(cosa)
                    <p>{cosa.name}</p>
                    // <div>
                    //     <p>{cosa.name}</p>
                    //     <p>{cosa.attendance}</p>
                    //     <p>{cosa.time}</p>
                    // </div>
                )}
            </div>
        )
    }
}