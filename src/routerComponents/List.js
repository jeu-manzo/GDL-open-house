import React, { Component } from 'react';
import firebase from '../config/FirestoreConfig';
import FormLogin from '../components/FormLogin';
import Navigation from './Navigation';
import Table from '../components/Table';
import '../styles/Navigation.css';
import '../styles/Summary.css';
import '../styles/Table.css';

export default class Lists extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            user: null
        });
    }

    componentDidMount() {
        this.authListener();
    }

    authListener = () => {
        firebase.auth().onAuthStateChanged(user => {
            console.log(user);
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        });
    }

    render() {
        return (
            <div className="App">
                {this.state.user ? (
                    <div>
                        <Navigation  className="navigation"/>
                        <br/>
                        <h1 className="lists">Lista de asistencias</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Estudiante</th>
                                    <th>Estatus</th>
                                    <th>Hora</th>
                                    {/* <th>Notas</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <Table />
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <FormLogin />
                )}
            </div>
        )
    }
}