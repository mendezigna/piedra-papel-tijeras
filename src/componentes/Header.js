import React from 'react';
import { useHistory } from 'react-router-dom';
import Reglas from './Reglas';

export default function Header({puntosJugadorUno, puntosJugadorDos}){

    const history = useHistory();

    const volver = () => {
        history.push("/");
    }

    return(
        <header className="header">
            <nav class="navbar navbar-light bg-dark">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#reglasModal">Reglas</button>
                {puntosJugadorUno} - {puntosJugadorDos}
                <button type="button" className="btn btn-primary" id="volver" onClick={volver}>Volver</button>
            </nav>
            <Reglas />
        </header>
    );
} 