
import React from 'react';
import Navigation from './Navigation';

const Lists = () => {
    return(
        <div>
            <Navigation />
            <h1>Lista de asistencias</h1>
            <table>
                <thead>
                    <tr>
                        <th>Estudiante</th>
                        <th>Hora</th>
                        <th>Estatus</th>
                        <th>Nota</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Lists;
