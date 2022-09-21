import React from "react";
import { TransContext } from "../../TransContext";
import './BuscadorSimple.css';

function BuscadorSimple ({children}) {

    const {cadenaCaracteres, setCadena} = React.useContext(TransContext)

    return(
        <form className="form__container">
            <input 
                type='text' 
                className="form__search"
                placeholder="Busque por palabra clave"
                value={cadenaCaracteres}
                onChange={(e)=>setCadena(e.target.value)}>
            </input>
            <div className="check__container">
                {children}
                <label 
                    for='tipo__busqueda'
                    className="form__radioText">
                    Avanzado
                </label>
            </div>
        </form>
    );
}

export {BuscadorSimple};