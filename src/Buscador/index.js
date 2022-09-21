import React from "react";
import { TransContext } from "../TransContext";
import { BuscadorSimple } from "./BuscadorSimple";
import { BuscadorAvanzado } from "./BuscadoAvanzado";
import { CheckComponent } from "./CheckComp";


function Buscador () {

    const {tipoBuscador} = React.useContext(TransContext);
    
    
    return (
        <nav>
            { !!tipoBuscador && <BuscadorAvanzado>
                                    <CheckComponent/>
                                </BuscadorAvanzado> }
            { !tipoBuscador && <BuscadorSimple>
                                    <CheckComponent/>
                                </BuscadorSimple> }
        </nav>
    );
}

export {Buscador};