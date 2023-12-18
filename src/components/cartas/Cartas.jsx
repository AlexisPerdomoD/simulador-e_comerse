import  BotonGenerico  from "../botonGenerico/BotonGenerico"
import { Link } from "react-router-dom"
import estilo from "./Cartas.module.css"
import { useNavBarContext } from "../contextNavBar/ContextNavBar"
import { useEffect, useState } from "react"

export const Cartas = ({producto})=> {
  const navContext = useNavBarContext();
  const {cargarProductosCarrito, productosCarrito} = useNavBarContext()
  const [contador, setContador] = useState(0)
  // render key 
  const [renderKey, setRenderKey]=useState(0)
   
  
  
  const contadorToggle = (valor) => {

    if(contador < 1 && valor < 0){
      setContador(0)
    }else{
      setContador(previo => previo + valor)
    }
  }

  const renderBotonCarta = () => {
    let index = productosCarrito.findIndex(e => e.id === producto.id)
    // luego imlementamos aca la funcion para verificar si la cantidad es cero y asi eliminar del carrito 
    if(index !== -1){
      let textoBtnPr = contador === 0 ? "remover producto" :(productosCarrito[index].cantidad===contador ?"producto agregado":"actualizar cantidad")
      return <>
      {contador > 0  && <BotonGenerico texto={"-1"} funcionOModuloAEjecutar={() => contadorToggle(-1)}/>}
      <span className="count">{contador}</span>
      <BotonGenerico texto={"+1"} funcionOModuloAEjecutar={() => contadorToggle(1)}/>
      <BotonGenerico texto={textoBtnPr} funcionOModuloAEjecutar={()=>{cargarProductosCarrito(producto, contador);setRenderKey((pre)=> pre + 1)}}/>
      </>
    }else{
      return <BotonGenerico texto="agregar a carrito" funcionOModuloAEjecutar={()=>{contadorToggle(1);cargarProductosCarrito(producto, contador)}}/>
    }
  }


  return  <>
  <div className={estilo.card} key={producto.codigo}>
    <img src={producto.imagenes[0] || "/img/logoTest.svg"} className="card-img-top" alt={producto.nombre}/>
    <div className={estilo.cardBody}>
      <h5 className="card-title">{producto.nombre}</h5>
      <p className="price"><strong style={{color:"var(--colorPrincipal)",fontSize:"1.5rem"}}>S/{producto.precio}</strong></p>
    </div>
    < div className={estilo.contenedorBotones} >
        <Link to={`/item/${producto.codigo}`}>
        <BotonGenerico valor="detallesProducto" texto="detalles" />
        </Link>
        {renderBotonCarta()}
        
        
      </div>
  </div>
  </>
    }