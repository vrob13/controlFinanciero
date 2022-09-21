import React from "react";
import './Item_entry_incomplete.css';
import './Item_egress_incomplete.css';
import './Item_entry_complete.css'
import './Item_egress_complete.css'

const clase = [
    "item__container--entryIncomplete",
    "item__container--egressIncomplete",
    "item__container--entryComplete",
    "item__container--egressComplete",
]

const tipoClase = (tipo,estado)=>{
    if (tipo && estado) return clase[2];
    if (!tipo && estado) return clase[3];
    if (tipo && !estado) return clase[0];
    if (!tipo && !estado) return clase[1];
    return clase[0];
}

function Item (
    {
        fecha,
        concepto,
        tipo,
        estado,
        valor,
        onComplete,
        onDelete
    }
) {


    const formatoValor = new Intl.NumberFormat('es-Latn-CO').format(valor);

    return (
        <li className={tipoClase(tipo,estado)}>
            <section className="item__data">
                <button 
                    className={`button ${!!estado && 'actived'}`}
                    onClick={onComplete}
                >✔</button>
                <p className="text">{concepto}</p>
                <p className="price">${formatoValor}</p>
                <span className="date">{fecha}</span>
            </section>
            <section className="item__close">
                <button
                    onClick={onDelete}
                >
                    
                </button>
            </section>
        </li>
    );
}

export {Item}; 