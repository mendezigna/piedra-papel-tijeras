import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Reglas from './Reglas';

export default function Header({puntosJugadorUno, puntosJugadorDos}){



    return(
        <header className="header">
            <nav className="navbar navbar-light bg-dark">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#reglasModal">Reglas</button>
                {puntosJugadorUno} - {puntosJugadorDos}
                <Link to="/"> <button type="button" className="btn btn-primary" id="volver">Volver</button></Link>
            </nav>
            <Reglas />
        </header>
    );
} 