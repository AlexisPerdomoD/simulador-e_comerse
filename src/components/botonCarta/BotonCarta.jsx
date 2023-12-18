import { useState } from "react"
import { useNavBarContext } from "../contextNavBar/ContextNavBar"
import  BotonGenerico  from "../botonGenerico/BotonGenerico"

export const BotonCarta = ({productosCarrito, producto}) => {
    const {cargarProductosCarrito} = useNavBarContext();
    const [contador, setContador] = useState(0)
    const contadorToggle = (valor) => {
      if(contador < 1 && valor < 0){
        setContador(0)
      }else{
        setContador(previo => previo + valor)
      }
    }
    // render key para actualizar textobtnpr
    const [renderKey, setRenderKey] = useState(0)
    let index = productosCarrito.findIndex(e => e.id === producto.id)
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