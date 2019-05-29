import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import fireBase from '../config/FirestoreConfig';

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fireBase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fireBase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <Form>
        <Form.Group  className="form-group">
          <Form.Label>Correo</Form.Label>
          <Form.Control value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" placeholder="Enter email" />
        </Form.Group>
        <Form.Group  className="form-group">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" placeholder="Password" />
        </Form.Group >
        <Button type="submit" onClick={this.login} className="btn btn-primary">Login</Button>
        <Button onClick={this.signup} className="btn btn-success">Signup</Button>
      </Form>
    );
  }
}
export default FormLogin;
