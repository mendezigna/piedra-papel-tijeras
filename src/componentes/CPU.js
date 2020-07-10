import React from 'react';
import Elecciones from './Elecciones';
import signoPregunta from '../img/signo-pregunta.png';

export default function CPU({eleccion, eligioJugador}){

    return(
        <div className="jugador">
            <div className="jugador-header">
                <h3> CPU </h3>
            </div>
            <div className="elecciones-jugador">
                <section>
                    <img src={signoPregunta} alt="signo-pregunta" className="img-eleccion" />
                </section>
                <section>
                    <Elecciones CPU={true} eligioJugador={eligioJugador} />
                </section>
            </div>
        </div>
    );
}