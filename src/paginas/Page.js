import React, { useState, useEffect } from 'react';
import Header from '../componentes/Header';
import JugadorUno from '../componentes/JugadorUno';
import Ganador from '../componentes/Ganador';
import JugadorDos from '../componentes/JugadorDos';

export default function Page({CPU}){

    const [puntosJugadorUno, setPuntosJugadorUno] = useState(0);
    const [puntosJugadorDos, setPuntosJugadorDos] = useState(0);
    const [eligioJugadorUno, setEligioJugadorUno] = useState(false);
    const [eligioJugadorDos, setEligioJugadorDos] = useState(false);
    const [eleccionJugadorUno, setEleccionJugadorUno] = useState("");
    const [eleccionJugadorDos, setEleccionJugadorDos] = useState("");
    const [showGanador, setShowGanador] = useState(false);
    const [ganador, setGanador] = useState("");

    const puntuarJugadorDos = () =>{
        setPuntosJugadorDos(puntosJugadorDos + 1);
    }
    const puntuarJugadorUno = () => {
        setPuntosJugadorUno(puntosJugadorUno + 1);
    }

    const seleccionarJugadorUno = (value) => {
        setEleccionJugadorUno(value);
        setEligioJugadorUno(true);
    }
    const elegirGanador = () => {
        if(eleccionJugadorUno === eleccionJugadorDos){
            setGanador("Empate");
        } else if((eleccionJugadorUno === "piedra" && (eleccionJugadorDos === "tijera" || eleccionJugadorDos === "lagarto")) ||
                  (eleccionJugadorUno === "papel" && (eleccionJugadorDos === "piedra" || eleccionJugadorDos === "spock")) || 
                  (eleccionJugadorUno === "tijera" && (eleccionJugadorDos === "papel" || eleccionJugadorDos === "lagarto")) || 
                  (eleccionJugadorUno === "lagarto" && (eleccionJugadorDos === "papel" || eleccionJugadorDos === "spock")) ||
                  (eleccionJugadorUno === "spock" && (eleccionJugadorDos === "tijera" || eleccionJugadorDos === "piedra"))){
            puntuarJugadorUno();
            setGanador("Jugador 1");
        } else {
            puntuarJugadorDos();
            if(CPU){
                setGanador("CPU");
            } else {
                setGanador("Jugador 2");
            }
        }
    }

    const seleccionarJugadorDos = (value) => {
        setEleccionJugadorDos(value);
        setEligioJugadorDos(true);
    }

    const reiniciar = () => {
        setEleccionJugadorDos("");
        setEligioJugadorDos(false);
        setEleccionJugadorUno("");
        setEligioJugadorUno("");
        setShowGanador(false);
    }

    useEffect( () => {
        if(eligioJugadorUno && eligioJugadorDos){
            elegirGanador();
            setShowGanador(true);
        }
    }, [eligioJugadorUno, eligioJugadorDos])


    return(
        <div className="page-container">
            <Header puntosJugadorUno={puntosJugadorUno} puntosJugadorDos={puntosJugadorDos}/>
            <div className="page-content">
                <section >
                    <JugadorUno elegir={seleccionarJugadorUno} eleccionJugador={eleccionJugadorUno} jugador="1" eligioJugador={eligioJugadorUno} eligioContrincante={eligioJugadorDos}/>
                </section>
                <section >
                    {showGanador && <Ganador ganador={ganador} reiniciar={reiniciar}/>}
                </section>
                <section>
                    <JugadorDos CPU={CPU} elegir={seleccionarJugadorDos} eleccionJugador={eleccionJugadorDos} jugador="2" eligioJugador={eligioJugadorDos} eligioContrincante={eligioJugadorUno}/>
                </section>
            </div>
        </div>
    ); 
}