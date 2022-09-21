import React from 'react';
import { Buscador } from '../Buscador';
import { Datos } from '../Datos';
import { Item } from '../Item';
import { List } from '../List';
import { BotonAgregar } from '../BotonAgregar';
import { Footer } from '../Footer';
import {TransContext} from '../TransContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {


    const {resultTransacciones, completeTransaccion, deleteTransaccion, openModal} = React.useContext(TransContext);

     return (
        <React.Fragment>
          <h1 className='title'>Registro de Ingreso - Egreso</h1>
          <Buscador/>
          <Datos />
          <List>
            {
              resultTransacciones.map(dato=>(
                <Item
                key = {dato.concepto} 
                fecha = {dato.fecha}
                concepto = {dato.concepto}
                tipo = {dato.tipo}
                estado = {dato.estado}
                valor = {dato.valor}
                onComplete = {()=>completeTransaccion(dato.concepto)}
                onDelete = {()=>deleteTransaccion(dato.concepto)}
                />
                ))
              }
          </List>  
          {openModal && (
            <Modal>
                <TodoForm></TodoForm>
            </Modal>
          )}
          <BotonAgregar/>
          <Footer />
        </React.Fragment>   
    );
  }
  
  export { AppUI };
  