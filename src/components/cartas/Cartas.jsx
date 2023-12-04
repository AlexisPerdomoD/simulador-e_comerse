import  BotonGenerico  from "../botonGenerico/BotonGenerico"
import { Link } from "react-router-dom"
import estilo from "./Cartas.module.css"
import { useNavBarContext } from "../contextNavBar/ContextNavBar"

export const Cartas = ({producto})=> {
  const {cargarProductosCarrito} = useNavBarContext()
  return  <>
  <div className={estilo.card} key={producto.codigo}>
    <img src={producto.imagenes[0] || "/img/logoTest.svg"} className="card-img-top" alt={producto.nombre}/>
    <div className={estilo.cardBody}>
      <h5 className="card-title">{producto.nombre}</h5>
      <p className="precio"><strong style={{color:"var(--colorPrincipal)",fontSize:"1.5rem"}}>S/{producto.precio}</strong></p>
    </div>
    < div className={estilo.contenedorBotones}>
        <Link to={`/item/${producto.codigo}`}>
        <BotonGenerico valor="detallesProducto" texto="detalles" />
        </Link>
        <BotonGenerico valor="agregarACarrito" texto="agregar" funcionOModuloAEjecutar={()=>cargarProductosCarrito(producto)}/>
        
      </div>
  </div>
  </>
    }