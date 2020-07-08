import React from 'react';
import img from '../img/img-modal.webp';

export default function Modal(){
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Piedra, Papel, Tijera, Lagarto o Spock</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>
                            Piedra, Papel, Tijera, Lagarto o Spock es una expansión de los clásicos método de selección de juego piedra-papel-tijeras.
                        </p> 
                        <img className="img-modal" src={img} alt="piedra, papel, tijera, lagarto o spock img"></img>
                        <p>
                            Funciona en el mismo principio básico, pero incluye dos armas adicionales: el lagarto (formado por la mano como un títere de calcetín como la boca) y Spock (formado por la mano Vulcana de Star Trek). 
                            Esto reduce las posibilidades de un final redondo en un empate. El juego fue inventado por Sam Kass con Karen Bryla.
                        </p>
                        <p>
                            El juego fue mencionado en cuatro episodios de The Big Bang Theory. De acuerdo con una entrevista con Kass, los productores de la serie no pidieron permiso para usar el juego, pero más tarde se hace referencia en un episodio de la quinta temporada.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}