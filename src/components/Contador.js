import React, { useReducer, useState} from "react";
import { reducer, initialState } from './reducer';


const Contador = () => {
    
    const [estado, dispatch] = useReducer(reducer, initialState);

    const sumarUno = () => dispatch({ type: 'INCREMENTAR'});
    const restarUno = () => dispatch({type: 'DECREMENTAR'});
    const sumarNumero = () => dispatch({type: 'INCREMENTAR_NRO', payload: 2});
    const restarNumero = () => dispatch({type: 'DECREMENTAR_NRO', payload: 2});
    const verContador = () => dispatch({type: 'VER_CONTADOR'})


    return estado.visible ? (
        <div>
            <button onClick={sumarNumero}>+ 2</button>
            <button onClick={sumarUno}>+ 1</button>
            <p>{estado.contador}</p>
            <button onClick={restarUno}>- 1</button>
            <button onClick={restarNumero}>- 2</button>
        </div>
    ) : (
        <div><button onClick={verContador()}>Ver Contacto</button></div>
    )
}

export default Contador;

