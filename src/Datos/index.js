import React from "react";
import { TransContext } from "../TransContext";
import './Datos.css'


const sumasTotales = (arrayTransacciones) => {
    
    let ingreso = 0;
    let egreso = 0;
    let total = 0;
    let completadas = 0;

    arrayTransacciones.map(item=>{
        if(item.tipo && item.estado){
            ingreso += item.valor;
            completadas ++;
        }
        if(!item.tipo && item.estado){
            egreso += item.valor;
            completadas ++;
        }
    });

    total = ingreso - egreso;

    const resultEgreso = new Intl.NumberFormat('es-Latn-CO').format(egreso);
    const resultIngreso = new Intl.NumberFormat('es-Latn-CO').format(ingreso);
    const resultTotal = new Intl.NumberFormat('es-Latn-CO').format(total);

    return {resultEgreso, resultIngreso, resultTotal, completadas};
}

const sumasTotalesTentativas = (arrayTransacciones) => {
    
    let ingreso = 0;
    let egreso = 0;
    let total = 0;

    arrayTransacciones.map(item=>{
        if(item.tipo ){
            ingreso += item.valor;
        }
        if(!item.tipo){
            egreso += item.valor;
        }
    });

    total = ingreso - egreso;

    const resultEgresoTentativa = new Intl.NumberFormat('es-Latn-CO').format(egreso);
    const resultIngresoTentativa = new Intl.NumberFormat('es-Latn-CO').format(ingreso);
    const resultTotalTentativa = new Intl.NumberFormat('es-Latn-CO').format(total);

    return {resultEgresoTentativa, resultIngresoTentativa, resultTotalTentativa};
}

function Datos () {

    const 
        {   
            resultTransacciones
        } = React.useContext(TransContext);

    const {resultEgreso, resultIngreso, resultTotal, completadas} = sumasTotales(resultTransacciones);
    const {resultEgresoTentativa, resultIngresoTentativa, resultTotalTentativa} = sumasTotalesTentativas(resultTransacciones);

    return(
        <article className="data__conatiner">
            <h3 className="data__title">Estadisticas Generales</h3>
            <section className="data__total--complete">
                <div className="total__entry">
                    <p>$ <br/> {resultIngreso} </p>
                    <span>Ingresos</span>
                </div>
                <div className="total__difference">
                    <p>$ <br/> {resultTotal} </p>
                    <span>Total</span>
                </div>
                <div className="total__egress">
                    <p>$ <br/>  {resultEgreso} </p>
                    <span>Egresos</span>
                </div>
            </section>
            <section className="data__total--incomplete">
                <div className="total__entry">
                    <p>$ <br/> {resultIngresoTentativa}</p>
                    <span>Ingresos</span>
                </div>
                <div className="total__difference">
                    <p>$ <br/> {resultTotalTentativa}</p>
                    <span>Total</span>
                </div>
                <div className="total__egress">
                    <p>$ <br/> {resultEgresoTentativa}</p>
                    <span>Egresos</span>
                </div>
            </section>
            <p>Has completado {completadas} de {resultTransacciones.length} transacciones!</p>
        </article>
    );
}

export {Datos}; 