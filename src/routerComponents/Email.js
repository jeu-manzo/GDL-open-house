import React, { Component } from 'react';
import firebase from '../config/FirestoreConfig';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom';

export default class Email extends Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  sendEmail(e) {
    e.preventDefault();
    firebase.auth().sendPasswordResetEmail(this.state.email).then((u) => {
      alert("Revisa tu correo electrónico")
      this.props.history.push('/login')
    }).catch((error) => {
      console.log(error);
    });
  }


  render() {
    return (
      <div className="App">
        <Card className="text-center form-form">
          <Card.Header>Restablece tu contraseña</Card.Header>
          <Card.Body>
            <Card.Title>Ingresa tu correo electrónico para restablecer tu contraseña </Card.Title>
            <Card.Text>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control value={this.state.email} onChange={this.handleChange} name="email" type="email" placeholder="nombre@ejemplo.com" />
              </Form.Group>
            </Card.Text>
            <Button variant="primary" onClick={this.sendEmail} className="btn btn-primary btn-login" size="lg">Enviar</Button>
            <Button variant="primary" className="btn btn-success btn-signup" size="lg"><NavLink to='/login' className="navlink-cancel">Cancelar</NavLink></Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}