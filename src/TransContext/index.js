import React from "react";
import {useLocalStorage} from "./useLocalStorage"

const TransContext = React.createContext();
const transacciones = [
  {
    fecha:'2021/12/20',
    concepto:'Consignacion Banco1',
    tipo:false,
    estado:false,
    valor:800000
  },
  {
    fecha:'2021/05/21',
    concepto:'Consignacion Banco2',
    tipo:true,
    estado:false,
    valor:650000
  },
  {
    fecha:'2021/02/02',
    concepto:'Consignacion Banco3',
    tipo:false,
    estado:true,
    valor:1200000
  },
  {
    fecha:'2021/05/15',
    concepto:'Consignacion Banco4',
    tipo:true,
    estado:true,
    valor:1000000
  },
  
]

const buscaFechasTransacciones = (fecha1,fecha2,transaccionesArray) =>{
  
  const fechaInicio = Date.parse(fecha1);
  const fechaFinal = Date.parse(fecha2);
  let newArrayFechas = [];
  
  if((!fecha1.length >= 1) || (!fecha2.length >=1)){
    console.log('entre');
    return transaccionesArray;
  } else {
    transaccionesArray.filter((e)=>{
      const fechaTransaccion = Date.parse(e.fecha);
      if((fechaTransaccion >= fechaInicio) && (fechaTransaccion <= fechaFinal)) {
        newArrayFechas.push(e);
      }
    });
    return newArrayFechas;
  }
};

const buscaPalabraTransacciones = (cadenaTexto,transaccionesArray,funcion)=>{
  if((!cadenaTexto.length >= 1) || (!cadenaTexto==='')){
    return transaccionesArray;
  }else {

      transaccionesArray = transaccionesArray.filter((e)=>{
      const textoBusqueda = cadenaTexto.toLowerCase();
      let textoTransacciones = '';
      if(funcion === 'palabra'){
        textoTransacciones = e.concepto.toLowerCase();
      }else if (funcion === 'fecha'){
        textoTransacciones = e.fecha.toLowerCase();
      }
      return textoTransacciones.includes(textoBusqueda);
    })
  }
  return transaccionesArray;
}

const buscaEstadoTransacciones = (estado, transaccionesArray) =>{
  
  let newArray = [];
  
  if(estado){
    if (estado === 'uno') {
      newArray = transaccionesArray;
    }
    if (estado === 'dos') {
      newArray = transaccionesArray.filter((e)=>{
        if(e.estado === true) {
          return e;
        }
      })
    }
    if(estado === 'tres') {
      newArray = transaccionesArray.filter((e)=>{
        if(e.estado === false){
          return e;
        }
      })
    }
  }
  return newArray;
}

function TransProvider(props) {

  //const [arrayTransacciones, setArrayTransaccion] = React.useState(transacciones);
  const [tipoBuscador, setTipoBuscador] = React.useState(false);
  const [tipoFecha, setTipoFecha] = React.useState(false);
  const [fechaGuardada1, setFechaGuardada1] = React.useState('');
  const [fechaGuardada2, setFechaGuardada2] = React.useState('');
  const [cadenaCaracteres,setCadena] = React.useState('');
  const [fecha1,setFecha1] = React.useState('');
  const [fecha2,setFecha2] = React.useState('');  
  const [estado,setEstado] = React.useState('uno');
  const [openModal,setOpenModal] = React.useState(false);

  const {
    item:arrayTransacciones,
    saveItem: setArrayTransaccion,
    loading,
    error,
  } = useLocalStorage('Transacciones_V1.0', transacciones);

  const palabraTransacciones = buscaPalabraTransacciones(cadenaCaracteres, arrayTransacciones, 'palabra');
  
  let fechaTransacciones = [];
  let estadoTransacciones = [];

  if (tipoBuscador){
    
    if(!tipoFecha) {
      fechaTransacciones = buscaPalabraTransacciones(fecha1,palabraTransacciones, 'fecha');
    }
    if(!!tipoFecha) {
      fechaTransacciones = buscaFechasTransacciones(fecha1,fecha2,palabraTransacciones); 
    }
    estadoTransacciones = buscaEstadoTransacciones(estado,fechaTransacciones);
  
  } else {

    estadoTransacciones = palabraTransacciones;
  }

  const addTransaccion = (fecha,concepto,tipo,valor) => {
    const newTodos = [...arrayTransacciones];
    newTodos.push({
      fecha,
      concepto,
      tipo,
      estado:false,
      valor
    });
    console.log(newTodos);
    setArrayTransaccion(newTodos);
  }

  const completeTransaccion = (concepto) => {
    const findIndex = arrayTransacciones.findIndex((item)=>{
      return item.concepto === concepto;
    });
    
    const newTransacciones = [...arrayTransacciones];
    
    if(newTransacciones[findIndex].estado){ 
      newTransacciones[findIndex].estado = false
    }else {
      newTransacciones[findIndex].estado = true;
    }
    setArrayTransaccion(newTransacciones);
  }
  
  const deleteTransaccion = (concepto) => {
    const findIndex = arrayTransacciones.findIndex((item)=>{
      return item.concepto === concepto;
    });
    const newTransacciones = [...arrayTransacciones];
    newTransacciones.splice(findIndex,1);  
    setArrayTransaccion(newTransacciones);
  }
 
  const resultTransacciones = estadoTransacciones;
  
  return (
    <TransContext.Provider value={
        {
          resultTransacciones,
          tipoBuscador,
          setTipoBuscador,
          tipoFecha,
          setTipoFecha,
          cadenaCaracteres,
          setCadena,
          setFecha1,
          setFecha2,
          estado,
          setEstado,
          fechaGuardada1,
          setFechaGuardada1,
          fechaGuardada2,
          setFechaGuardada2,
          completeTransaccion,
          deleteTransaccion,
          openModal,
          setOpenModal,
          addTransaccion

        }
    }>
        {props.children}
    </TransContext.Provider>
  )
}

export {TransContext, TransProvider}