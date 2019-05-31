import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from '../config/FirestoreConfig';
import '../styles/Navigation.css';

export default class Navigation extends Component {
    logout = () => {
        firebase.auth().signOut();
    }
    render() {
        return(
            <div className="navigation">
                <NavLink to='/'>Resumen</NavLink>
                <NavLink to='/attendance'>Tomar asistencia</NavLink>
                <NavLink to='/lists'>Listas</NavLink>
                <NavLink to='/login' onClick={this.logout}>Cerrar sesión</NavLink>
            </div>
        )
    }
}
