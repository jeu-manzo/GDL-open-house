import React, { Component } from 'react';
import db from '../config/fireBase';
import { NavLink } from 'react-router-dom';

class LogOut extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        db.auth().signOut();
    }

    render() {
        return (
          <NavLink to='/' onClick={this.logout}>Cerrar Sesión</NavLink>
        )
    }

}

export default LogOut;
