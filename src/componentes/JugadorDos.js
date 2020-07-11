import React, { useState, useEffect } from 'react';
import Elecciones from './Elecciones';
import signoPregunta from '../img/signo-pregunta.png';
import piedra from '../img/piedra.png';
import papel from '../img/papel.png';
import tijera from '../img/tijera.png';
import lagarto from '../img/lagarto.png';
import spock from '../img/spock.png';

const imagenes = ["piedra", "papel", "tijera", "lagarto", "spock"]

export default function JugadorDos({CPU, elegir, eligioJugador, jugador, eligioContrincante, eleccionJugador}){

    const [imagenSeleccionada, setImagenSeleccionada] = useState("");

    useEffect( () => {
        if(!eligioContrincante || (!eligioJugador && !CPU)){
            setImagenSeleccionada(signoPregunta);
        } else {
            if(eleccionJugador === "" && CPU){
                const numeroRandom = Math.floor(Math.random() * 5);
                console.log(numeroRandom)
                elegir(imagenes[numeroRandom]);
            }
            
            switch (eleccionJugador){
                case "piedra":
                    setImagenSeleccionada(piedra)
                break;
                case "papel":
                    setImagenSeleccionada(papel);
                break;
                case "tijera":
                    setImagenSeleccionada(tijera);
                break;
                case "lagarto":
                    setImagenSeleccionada(lagarto);
                break
                case "spock":
                    setImagenSeleccionada(spock);
                break;
                default:
                    setImagenSeleccionada(signoPregunta);
                ;
            }
        }
    }, [eligioContrincante, eleccionJugador, eleccionJugador])

    const header = () => {
        if(CPU){
            return "CPU"
        } else {
            return "Jugador " + jugador
        }
    }

    return(
        <div className="jugador">
            <div className="jugador-header">
                <h3> {header()} </h3>
            </div>
            <div className="elecciones-jugador">
                <section>
                    <img src={imagenSeleccionada} alt="signo-pregunta" className="img-eleccion" />
                </section>
                <section>
                    <Elecciones elegir={elegir} CPU={CPU} eligioJugador={eligioJugador} />
                </section>
            </div>
        </div>
    );
}