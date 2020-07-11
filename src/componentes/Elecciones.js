import React from 'react';
import piedra from '../img/piedra.png';
import papel from '../img/papel.png';
import tijera from '../img/tijera.png';
import lagarto from '../img/lagarto.png';
import spock from '../img/spock.png';

export default function Elecciones({elegir, CPU, eligioJugador}){

    const seleccionar = (event) =>{
        elegir(event.target.attributes.value.value);
    }

    return(
        <>
            <section>
                <button type="button" className="btn-lg bg-transparent border-0" aria-pressed="false" disabled={CPU || eligioJugador} id="btn-eleccion" onClick={seleccionar} value="piedra">
                    <img src={piedra} alt="piedra" className="img-eleccion" id="piedra" value="piedra"/>
                </button>
            </section>
            <section>
                <button type="button" className="btn-lg bg-transparent border-0" aria-pressed="false" disabled={CPU || eligioJugador} id="btn-eleccion" onClick={seleccionar} value="papel">
                    <img src={papel} alt="papel" className="img-eleccion" id="papel" value="papel"/>
                </button>
            </section>
            <section>
                <button type="button" className="btn-lg bg-transparent border-0" aria-pressed="false" disabled={CPU || eligioJugador} id="btn-eleccion" onClick={seleccionar} value="tijera">
                    <img src={tijera} alt="tijera" className="img-eleccion" id="tijera" value="tijera"/>
                </button>
            </section>
            <section>
                <button type="button" className="btn-lg bg-transparent border-0" aria-pressed="false" disabled={CPU || eligioJugador} id="btn-eleccion" onClick={seleccionar} value="lagarto">
                    <img src={lagarto} alt="lagarto" className="img-eleccion" id="lagarto" value="lagarto"/>
                </button>
            </section>
            <section>
                <button type="button" className="btn-lg bg-transparent border-0" aria-pressed="false" disabled={CPU || eligioJugador} id="btn-eleccion" onClick={seleccionar} value="spock">
                    <img src={spock} alt="spock" className="img-eleccion" id="spock" value="spock"/>
                </button>
            </section>
        </>
    );
}