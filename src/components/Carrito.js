import React, { useEffect, useReducer } from "react";
import { TYPES } from "./action";
import ItemCarrito from "./ItemCarrito";
import Producto from "./Producto";
import { carritoInitialState, CarritoReducer } from "./reducer";
import axios from "axios";

const Carrito = () => {
  const [state, dispatch] = useReducer(CarritoReducer, carritoInitialState);

  const actualizarEstado = async () => {
    const productosURL = "http://localhost:8080/products";
    const carritoURL = "http://localhost:8080/carrito";

    //1- peticiones axios de tipo HTTP de tipo GET (obtención de datos)
    const listaProductos = await axios.get(productosURL);
    const carrito = await axios.get(carritoURL);

    const nuevosProductos = listaProductos.data;
    const nuevoCarrito = carrito.data;

    //2- por payload le mando a la acción read_state, la respuesta de la petición
    dispatch({
      type: TYPES.READ_STATE,
      payload: [nuevosProductos, nuevoCarrito],
    });
  };

  useEffect(() => {
    actualizarEstado();
  }, []);

  const { products, carrito } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id, eliminarTodos) => {
    if (eliminarTodos) {
      dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ITEM, payload: id });
    }
  };

  const cleanCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div className="container-fluid">
      <br></br> <br></br> <br></br>
      <h1 className="productos-h1">Elegi tu camiseta de los mundiales!!!</h1>
      <br></br> 
      <h2 className="titleProductos">Productos</h2>
      <div className="row">
        {products.map((producto) => {
          return (
            <Producto key={producto.id} data={producto} addToCart={addToCart} />
          );
        })}
      </div>
      <h2>Carrito</h2>
      <div className="row">
        {carrito.map((item, index) => {
          return (
            <ItemCarrito
              key={index}
              data={item}
              deleteFromCart={deleteFromCart}
            />
          );
        })}
      </div>
      <button onClick={() => cleanCart()}>Limpiar</button>
    </div>
  );
};

export default Carrito;

// useefectt
//ahh tiene carrito initial state, tendria que poner en clearcart
// recomendado clase 5 react, funcion reductora (reemplazamos la funcion usestate por use reducer)

//const {products, carrito}=state;
