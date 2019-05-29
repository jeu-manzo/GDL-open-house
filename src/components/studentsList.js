import React from 'react';
import Data from '../data/students.json';
import Student from './student';

export default class StudentsList extends React.Component {
    render() {
        return(
            <table>
                <thead>
                    <th>Estudiante</th>
                    <th>Lunes 27 / 05 / 19</th>
                    <th>Martes 28 / 05 / 19</th>
                    <th>Miércoles 29 / 05 / 19</th>
                    <th>Jueves 30 / 05 / 19</th>
                    <th>Viernes 31 / 05 / 19</th>
                </thead>
                <tbody>
                    <tr>
                        <Student />
                    </tr>
                </tbody>
            </table>
        )
    }
}