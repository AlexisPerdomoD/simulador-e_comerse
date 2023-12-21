import  BotonGenerico  from "../botonGenerico/BotonGenerico"
import { Link } from "react-router-dom"
import "./Cartas.css"
import { useNavBarContext } from "../contextNavBar/ContextNavBar"
import { BotonCarta } from "../botonCarta/BotonCarta"

export const Cartas = ({producto})=> {
  const { productosCarrito} = useNavBarContext()
  return  <>
  <div className="card" key={producto.codigo}>
    <img height={"300px"} width={"260px"} src={producto.imagenes[0] || "/img/logoTest.svg"} className="card-img-top" alt={producto.nombre}/>
    <div className="cardBody">
      <h5 className="card__title">{producto.nombre}</h5>
      <p className="price">Precio por unidad: <strong>S/{producto.precio}</strong></p>
        <Link to={`/item/${producto.codigo}`}>
        <BotonGenerico valor="detallesProducto" texto="detalles" claseAdicional="button--secondary"/>
        </Link>
    </div>
    < div className="buttonContainer" >
        <BotonCarta productosCarrito={productosCarrito} producto={producto}/>
      </div>
  </div>
  </>
    }