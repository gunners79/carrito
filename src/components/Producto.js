import React from "react";
import Footer from "./footer";

const Producto = (props) => {
  const { data, addToCart } = props;

  return (
    <div className="container">
      <div className="card">
        <div className="productos">
          <div className="producto">
            <img src={data.src} className="producto_img" alt="" />
            <h4 className="producto_footer">{data.nombre}</h4>
            <h5 className="price">$ {data.precio}</h5>
            <div className="button">
              <button onClick={() => addToCart(data.id)} className="button">
                AGREGAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;

//<img src={data.src} className="img-fluid"  alt="..." />

//<div className='productos'>
//      <div className='card-prod'>
//    <img src={data.src} className="img-fluid"  alt="" />
//       <h4 className='nombre'>{data.nombre}</h4>
//       <h5 className='precio'>$ {data.precio}</h5>
//      <div className='buttom-agregar'><button
//    onClick={() => addToCart(data.id)}
//   >Agregar</button></div>
//
//      </div>
//     </div>
