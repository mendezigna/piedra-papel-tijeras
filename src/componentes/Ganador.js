import React from 'react';

export default function Ganador({ganador, reiniciar}){

    const mensageGanador = () => {
        if (ganador !== "Empate"){
            return "Gana: " + ganador;
        } else {
            return ganador;
        }
    }

    return (
        <div className="seccion-ganador">
            <div className="ganador">
                <h5>{mensageGanador()}</h5>
            </div>
            <div className="btn-restart">
                <button type="button" className="btn btn-primary" onClick={() => reiniciar()}> Volver a Jugar</button>
            </div>
        </div>
    );
}