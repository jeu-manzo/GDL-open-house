import React from 'react';
import { NavLink } from 'react-router-dom';
import firebase from '../config/FirestoreConfig';
class Navigation extends React.Component {
    logout = () => {
        firebase.auth().signOut();
    }
    render() {
        return(
            <div>
                <NavLink to='/'>Resumen</NavLink>
                <NavLink to='/attendance'>Tomar asistencia</NavLink>
                <NavLink to='/lists'>Listas</NavLink>
                <NavLink to='/login' onClick={this.logout}>Cerrar sesión</NavLink>
            </div>
        )
    }
}

export default Navigation;