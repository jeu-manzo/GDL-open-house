import React, { Component } from 'react';
import Navigation from './Navigation';
import SummaryModules from '../components/SummaryModules';
import '../styles/Summary.css';
import '../styles/Navigation.css';

class Summary extends Component {

  render() {
    return (
      <div>
        <div className="summary">
          <Navigation className="navigation" />
          <h1 className="summary__header">¡Bienvenidas!</h1>
        </div>
        <SummaryModules />
      </div>
    );
  }
}

export default Summary;
