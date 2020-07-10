import React from 'react';
import signoPregunta from '../img/signo-pregunta.png';
import Elecciones from './Elecciones';
export default function Jugador({eleccion, jugador, eligioJugador}){

    return(
        <div className="jugador">
            <div className="jugador-header">
                <h3> Jugador {jugador} </h3>
            </div>
            <div className="elecciones-jugador">
                <section>
                    <Elecciones eleccion={eleccion} CPU={false} eligioJugador={eligioJugador}/>
                </section>
                <section>
                    <img src={signoPregunta} alt="signo-pregunta" className="img-eleccion" />
                </section>
            </div>
        </div>
    );
}