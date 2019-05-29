import React, { Component } from 'react';
import fireBase from '../config/fireBase';
import { NavLink } from 'react-router-dom';

class LogOut extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fireBase.auth().signOut();
    }

    render() {
        return (
          <NavLink onClick={this.logout}>Cerrar Sesión</NavLink>
        )
    }

}

export default LogOut;
