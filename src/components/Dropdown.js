import React, {Component} from 'react';
import './style.css';


export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMenu: false,
        };
    };

    showDropdownMenu = (event) => {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu = () => {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    render() {
        return (
            <div className="dropdown" style={{ background: "red", width: "200px" }} >
                <div className="button" onClick={this.showDropdownMenu}> Comentarios </div>

                {this.state.displayMenu ? (
                    <ul>
                        <li><div className="active" href="#Create Page"></div></li>
                        <li><a href="#asistencia">A</a></li>
                        <li><a href="#tardanza">T</a></li>
                        <li><a href="#tardandaJustificada">TJ</a></li>
                        <li><a href="#falta">F</a></li>
                    </ul>
                ) :
                    (
                        null
                    )
                }

            </div>

        );
    }
}