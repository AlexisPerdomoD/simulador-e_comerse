import { createContext, useContext, useState } from "react";
import { fireBaseDB } from "../../assets/fireBaseDB";

const ContextNavBar = createContext();

{/*contexto general para parametros necesarios globalmente */}

export const ClickNavBarProvider = ({children})=>{ 
  // click navbar
  const [valorClickNavBar, setValorClickNavBar] = useState("inicio")

  function clickNavBarToggle(valorBotonNavBar) {
    setValorClickNavBar(valorBotonNavBar)
  };
  
  // carrito
  const [productosCarrito, setProductosCarrito] = useState([])

  function cargarProductosCarrito(producto){
    let index = productosCarrito.findIndex(e => e.codigo === producto.codigo) 
    
      index !== -1 ? productosCarrito[index].cantidad += 1 : setProductosCarrito(previoValor => [...previoValor , producto])
  };

 
  return <>
  <ContextNavBar.Provider value={{valorClickNavBar, clickNavBarToggle, productosCarrito, cargarProductosCarrito}}>
  {children}
  </ContextNavBar.Provider>
  </> 
}

{/* hook personalizado para evitar exportaciones de usecontext en otros modulos y verificar que se esta dentro de la jerarquia*/}

export const useNavBarContext = () => {
  const contexto = useContext(ContextNavBar);
  if (!contexto){throw new Error("contexto fuera de la jerarquia")}
  return contexto
}
