import React from 'react';
import firebase from '../config/FirestoreConfig';
import { NavLink } from 'react-router-dom';

export default class Logount extends React.Component {
    logout= () => {
        firebase.auth().signOut();
    }
    render() {
        return(
            <NavLink to='/' onClick={this.logout}>Cerrar sesión</NavLink>
        )
    }
}