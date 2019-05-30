import React, { Component } from 'react';

class Counter extends Component {

  render() {
    return (
      <div>
        <h1>{new Date().getDate()} de {new Date().getMonth()} {new Date().getFullYear()}</h1>
        <div> / Estudiantes</div>
        <div>
          Ausencias
          Retardos
          Bajas
        </div>
      </div>
    );
  }
}

 export default Counter;
