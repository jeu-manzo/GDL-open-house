import React, { Component } from 'react';
import Navigation from './Navigation';
import '../styles/Summary.css';
import '../styles/Navigation.css';

class Summary extends Component {

  render() {
    return (
      <div className="summary">
        <Navigation className="navigation" />
        <h1 className="summary__header">¡Bienvenidas!</h1>
      </div>
    );
  }
}

export default Summary;
