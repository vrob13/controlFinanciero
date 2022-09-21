import React from "react";
import { TransContext } from "../../TransContext";

function CheckComponent (){

    const {tipoBuscador,setTipoBuscador} = React.useContext(TransContext);

    return (
        <input 
            type='checkbox' 
            id="tipo__busqueda"
            className="form__radio"
            defaultChecked = {tipoBuscador}
            onClick={(e)=>setTipoBuscador(e.target.checked)}
        />
    );
}

export {CheckComponent};