import  BotonGenerico  from "../botonGenerico/BotonGenerico"
import estilo from "./Cartas.module.css"
export const Cartas = ({producto})=> {
  return  <div className={estilo.card} key={producto.codigo}>
        <img src="/img/logoTest.svg" className="card-img-top" alt={producto.nombre}/>
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">{producto.descripcion}</p>
          < div className="botonesContenedor">
            <BotonGenerico valor="agregarACarrito" texto="agregar" />
            <BotonGenerico valor="detallesProducto" texto="detalles" />
          </div>
        </div>
      </div>
    }