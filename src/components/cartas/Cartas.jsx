import  BotonGenerico  from "../botonGenerico/BotonGenerico"
import estilo from "./Cartas.module.css"
export const Cartas = ({producto})=> {
  return  <div className={estilo.card} key={producto.codigo}>
        <img src={producto.imagenes[0]} className="card-img-top" alt={producto.nombre}/>
        <div className={estilo.cardBody}>
          <h5 className="card-title">{producto.nombre}</h5>
          <p className={estilo.cardText}>{producto.descripcion}</p>
          <p className="precio"><strong>S/</strong>{producto.precio}</p>
        </div>
        < div className={estilo.contenedorBotones}>
            <BotonGenerico valor="agregarACarrito" texto="agregar" />
            <BotonGenerico valor="detallesProducto" texto="detalles" />
          </div>
      </div>
    }