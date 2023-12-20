import  BotonGenerico  from "../botonGenerico/BotonGenerico"
import { Link } from "react-router-dom"
import "./Cartas.css"
import { useNavBarContext } from "../contextNavBar/ContextNavBar"
import { BotonCarta } from "../botonCarta/BotonCarta"

export const Cartas = ({producto})=> {
  const { productosCarrito} = useNavBarContext()
  return  <>
  <div className="card" key={producto.codigo}>
    <img src={producto.imagenes[0] || "/img/logoTest.svg"} className="card-img-top" alt={producto.nombre}/>
    <div className="cardBody">
      <h5 className="card-title">{producto.nombre}</h5>
      <p className="price"><strong style={{color:"var(--colorPrincipal)",fontSize:"1.5rem"}}>S/{producto.precio}</strong></p>
    </div>
    < div className="buttonContainers" >
        <Link to={`/item/${producto.codigo}`}>
        <BotonGenerico valor="detallesProducto" texto="detalles" />
        </Link>
        <BotonCarta productosCarrito={productosCarrito} producto={producto}/>
      </div>
  </div>
  </>
    }