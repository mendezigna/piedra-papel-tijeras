import React, { useState } from 'react';
import Header from '../componentes/Header';
import Jugador from '../componentes/Jugador';

export default function PvPPage(){

    const [puntosJugadorUno, setPuntosJugadorUno] = useState(0);
    const [puntosJugadorDos, setPuntosJugadorDos] = useState(0);

    const puntuarJugadorDos = () =>{
        setPuntosJugadorDos(puntosJugadorDos + 1);
    }
    const puntuarJugadorUno = () => {
        setPuntosJugadorUno(puntosJugadorUno + 1);
    }

    return (
        <div className="pvp-page">
            <Header puntosJugadorUno={puntosJugadorUno} puntosJugadorDos={puntosJugadorDos}/>
            <Jugador puntuar={puntuarJugadorUno} />
            <Jugador puntuar={puntuarJugadorDos} />
        </div>
    );
}