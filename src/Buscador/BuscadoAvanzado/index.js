import React from "react";
import { TransContext } from "../../TransContext";
import './BuscadorAvanzado.css'

function BuscadorAvanzado ({children}) {

    const 
        {   tipoFecha,
            setTipoFecha,
            cadenaCaracteres, 
            setCadena,
            setFecha1,
            setFecha2,
            setEstado,
            fechaGuardada1, 
            setFechaGuardada1, 
            fechaGuardada2, 
            setFechaGuardada2, 
        } = React.useContext(TransContext);
    

    return(
        <form class="form__container--avanzado">
            <section className="search__word">
                <input 
                    type='text'
                    className="form__search"
                    placeholder="Busque por palabra clave"
                    value={cadenaCaracteres}
                    onChange={(e)=>setCadena(e.target.value)}
                    >
                </input>
                <div className="check__container">
                    {children}
                    <label 
                        for='tipo__busqueda'
                        className="form__radioText"> 
                        Avanzado 
                    </label>
                </div>
            </section>
            <section className="search__date">
                <input
                    className="date__value--start" 
                    type='date'
                    value={fechaGuardada1}
                    onChange={(e)=>
                        {
                            var re = /-/gi;
                            var str = e.target.value;
                            var newstr = str.replace(re, "/");
                            setFecha1(newstr);
                            setFechaGuardada1(str);    
                        }
                    }>
                </input>
                <label> 
                    Fecha 
                </label>
                <input 
                    className={`date__value--end ${ !tipoFecha && 'invisible'}`}
                    type='date'
                    value={fechaGuardada2}
                    onChange={(e)=>
                        {
                            var re = /-/gi;
                            var str = e.target.value;
                            var newstr = str.replace(re, "/");
                            setFecha2(newstr);
                            setFechaGuardada2(str);    
                        }
                    }
                    >
                </input>
                <div className="check__container">
                    <input 
                        type='checkbox' 
                        value='0'
                        className="form__radio"
                        defaultChecked = {tipoFecha} 
                        id="rango"
                        onClick={(e)=>setTipoFecha(e.target.checked)}/> 
                    <label 
                        for='rango'
                        className="form__radioText"> 
                        Rango 
                    </label>
                </div>
            </section>
            <section className="search__state">
                <label>Estado</label>
                <select 
                    className="state__options"
                    onChange={(e)=>{
                        setEstado(e.target.value);
                    }}
                >
                    <option value = 'uno' >Todas</option>
                    <option value = 'dos' >Completa</option>
                    <option value = 'tres' >Incompleta</option>
                </select>
            </section>

        </form>
    );
}

export {BuscadorAvanzado};