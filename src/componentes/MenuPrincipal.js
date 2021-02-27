import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import Modal from './Modal';

export default function MenuPrincipal(){


    return (
        <div className="main-menu">
            <div className="main-menu-header">
                <h2> Piedra, Papel, Tijera, Lagarto o Spock</h2>
            </div>
            <div className="menu-body">
                <div className="players-btn" >
                    <Link to='/pvc'><button type="button" className="btn btn-primary btn-lg" id="one-player" >Un Jugador</button> </Link>
                </div>
                <div className="players-btn" > 
                    <Link to='/pvp'><button type="button" className="btn btn-secondary btn-lg" id="two-player">Dos Jugadores</button> </Link>
                </div>
            </div>
            <div className="menu-bottom">
                <span className="btn-About" data-toggle="modal" data-target="#exampleModal">
                    <u>Acerca de</u>
                </span>
            </div>
            <Modal />
        </div>
    );
}