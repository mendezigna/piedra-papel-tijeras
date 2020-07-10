import React, { useState } from 'react';
import Header from '../componentes/Header';
import Jugador from '../componentes/Jugador';
import CPU from '../componentes/CPU';

export default function PvCPage(){

    const [puntosJugadorUno, setPuntosJugadorUno] = useState(0);
    const [puntosJugadorDos, setPuntosJugadorDos] = useState(0);
    const [eligioJugador, setEligioJugador] = useState(false);
    const [eligioCPU, setEligioCPU] = useState(false);
    const [eleccionJugador, setEleccionJugador] = useState("");
    const [eleccionCPU, setEleccionCPU] = useState("");

    const puntuarJugadorDos = () =>{
        setPuntosJugadorDos(puntosJugadorDos + 1);
    }
    const puntuarJugadorUno = () => {
        setPuntosJugadorUno(puntosJugadorUno + 1);
    }

    const seleccionarJugador = (value) => {
        setEligioJugador(true);
        setEleccionJugador(value);
    }

    const seleccionarCPU = (value) => {
        setEligioCPU(true);
        setEleccionCPU(value);
    }

    return (
        <div className="pvc-page">
            <Header puntosJugadorUno={puntosJugadorUno} puntosJugadorDos={puntosJugadorDos}/>
            <div className="jugadores">
                <section >
                    <Jugador eleccion={seleccionarJugador} jugador="1" eligioJugador={eligioJugador}/>
                </section>
                <section>
                    <CPU eleccion={seleccionarCPU} eligioJugador={eligioJugador}/>
                </section>
            </div>
            
        </div>
    );
}