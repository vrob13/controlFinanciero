import React from "react";
import './BotonAgregar.css';
import { TransContext } from "../TransContext";


function BotonAgregar () {
    
    const {setOpenModal} = React.useContext(TransContext);
    const toggleModal = () => {
        setOpenModal(mode => !mode);
    }

    return(
        <button 
            className='agregar'
            onClick={toggleModal}
         ><span>+</span>
        </button>
    );
}

export {BotonAgregar};