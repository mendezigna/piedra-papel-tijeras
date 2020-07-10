import React from 'react';
import piedra from '../img/piedra.png';
import papel from '../img/papel.png';
import tijera from '../img/tijera.png';
import lagarto from '../img/lagarto.png';
import spock from '../img/spock.png';

export default function Jugador({eleccion, CPU, eligioJugador}){

    const elegir = (event) =>{
        eleccion(event.target.value);
    }

    return(
        <>
            <section>
                <button type="button" className="btn btn-secondary btn-lg bg-transparent border-0" disabled={CPU || eligioJugador} id="btn-eleccion" onClick={elegir} value="1">
                    <img src={piedra} alt="piedra" className="img-eleccion" id="piedra"/>
                </button>
            </section>
            <section>
                <button type="button" className="btn btn-secondary btn-lg bg-transparent border-0" disabled={CPU || eligioJugador} id="btn-eleccion" onClick={elegir} value="2">
                    <img src={papel} alt="papel" className="img-eleccion" id="papel"/>
                </button>
            </section>
            <section>
                <button type="button" className="btn btn-secondary btn-lg bg-transparent border-0" disabled={CPU || eligioJugador} id="btn-eleccion" onClick={elegir} value="3">
                    <img src={tijera} alt="tijera" className="img-eleccion" id="tijera"/>
                </button>
            </section>
            <section>
                <button type="button" className="btn btn-secondary btn-lg bg-transparent border-0" disabled={CPU || eligioJugador} id="btn-eleccion" onClick={elegir} value="4">
                    <img src={lagarto} alt="lagarto" className="img-eleccion" id="lagarto"/>
                </button>
            </section>
            <section>
                <button type="button" className="btn btn-secondary btn-lg bg-transparent border-0" disabled={CPU || eligioJugador} id="btn-eleccion" onClick={elegir} value="5">
                    <img src={spock} alt="spock" className="img-eleccion" id="spock"/>
                </button>
            </section>
        </>
    );
}