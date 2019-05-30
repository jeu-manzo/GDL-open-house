import React from 'react';
import Navigation from './Navigation';
import Table from '../components/Table';
import TableTest from '../components/TableTest';

const Lists = () => {
    return(
        <div>
            <Navigation />
            <h1>Lista de asistencias</h1>

            <TableTest />
            {/* <Table /> */}
        </div>
    )
}

export default Lists;