import React from "react";


const ItemCarrito = ({data, deleteFromCart}) => {
    const {id, nombre, precio, cantidad} = data;


  return (
    <div className="carrito">
      <br></br> <br></br> 
        <h4>{nombre}</h4>
        
        <h5>$ {precio} x {cantidad} = $ {precio*cantidad}</h5>
        <br></br> 
        <button onClick={()=>deleteFromCart(id)}>Eliminar uno</button>
        <br></br> 
        <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
    </div>
  )
}

export default ItemCarrito;