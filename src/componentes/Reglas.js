import React from 'react';
import reglas from '../img/reglas.jpg';

export default function Reglas(){
    return(
        <div className="modal fade" id="reglasModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <img src={reglas} alt="reglas"/>
            </div>
        </div>
    );
}
