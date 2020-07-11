import React, { useState, useEffect } from 'react';
import signoPregunta from '../img/signo-pregunta.png';
import piedra from '../img/piedra.png';
import papel from '../img/papel.png';
import tijera from '../img/tijera.png';
import lagarto from '../img/lagarto.png';
import spock from '../img/spock.png';
import Elecciones from './Elecciones';
export default function JugadorUno({elegir, jugador, eligioJugador, eleccionJugador, eligioContrincante}){

    const [imagenSeleccionada, setImagenSeleccionada] = useState("");

    useEffect( () => {
        if(!eligioJugador || !eligioContrincante){
            setImagenSeleccionada(signoPregunta);
        } else {
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
    }, [eligioJugador, eleccionJugador, eligioContrincante])

    return(
        <div className="jugador">
            <div className="jugador-header">
                <h3> Jugador {jugador} </h3>
            </div>
            <div className="elecciones-jugador">
                <section>
                    <Elecciones elegir={elegir} CPU={false} eligioJugador={eligioJugador}/>
                </section>
                <section>
                    <img src={imagenSeleccionada} alt="signo-pregunta" className="img-eleccion" />
                </section>
            </div>
        </div>
    );
}