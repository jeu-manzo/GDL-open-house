import React from 'react';
import Navigation from './Navigation';
import Table from '../components/Table';
import '../styles/Navigation.css';
import '../styles/Summary.css';
import '../styles/Table.css';

const Lists = () => {
  return(
    <div>
      <div className="summary">
        <Navigation className="navigation"/>
        <h1 className="summary__header">Lista de asistencias</h1>
      </div>
      <div className="table">
        <Table />
      </div>
    </div>
  )
}

export default Lists;
