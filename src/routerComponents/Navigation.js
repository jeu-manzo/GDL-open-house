import React from 'react';
import { NavLink } from 'react-router-dom';
import firebase from '../config/FirestoreConfig';
// import Logout from '../components/Logout';

// const Navigation = () => {
//     return(
//         <div>
//             <NavLink to='/'>Resumen</NavLink>
//             <NavLink to='/attendance'>Tomar asistencia</NavLink>
//             <NavLink to='/lists'>Listas</NavLink>
//             <NavLink to='/login'>Cerrar sesión</NavLink>
//         </div>
//     )
// }

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
