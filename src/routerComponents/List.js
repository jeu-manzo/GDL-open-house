import React from 'react';
import Navigation from './Navigation';
import Table from '../components/Table';
// import TableTest from '../components/TableTest';

const Lists = () => {
    return(
        <div>
            <Navigation />
            <h1>Lista de asistencias</h1>
            <table>
                <thead>
                    <tr>
                        <th>Estudiante</th>
                        <th>Estatus</th>
                        <th>Hora</th>
                        <th>Notas</th>
                    </tr>
                </thead>
                <tbody>
                    <Table />
                </tbody>
            </table>
            {/* <Table /> */}
        </div>
    )
}

export default Lists;