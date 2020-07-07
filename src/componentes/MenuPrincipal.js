import React, { useState } from 'react';
import {useHistory, Redirect} from 'react-router-dom';

export default function MenuPrincipal(){

    const [unJugador, setUnJugador] = useState(true);

    let history = useHistory();

    const pvc = () => {
        if(!unJugador){
            setUnJugador(true);
        }
    }
    const pvp = () => {
        if(unJugador){
            setUnJugador(false);
        }
    }

    const jugar = (event) =>{
        event.preventDefault();
        if(unJugador){
            history.push("/pvc")
        } else {
            history.push("/pvp")
        }
    }

    return (
        <div className="main-menu">
            <div className="main-menu-header">
                <h2> Piedra, Papel, Tijera, Lagarto o Spock</h2>
            </div>
            <form className="menu-form">
                <div className="form-group form-check">
                    <input className="form-check-input" onClick={pvc} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label className="form-check-label" for="exampleRadios1">
                        Un Jugador
                    </label>
                </div>
                <div className="form-group form-check">
                    <input className="form-check-input" onClick={pvp} type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                    <label className="form-check-label" for="exampleRadios2">
                        Dos Jugadores
                    </label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={jugar}>Jugar</button>
            </form>
            <span className="btn-About">
                <u>Acerca de</u>
            </span>

        </div>
    );
}