import { createContext, useContext, useState } from "react";

const ContextNavBar = createContext();

{/*funcion generadora de contexto para determianr el valor del ultimo boton precionado en mi navBar */}

export const ClickNavBarProvider = ({children})=>{ 
  const [valorClickNavBar, setValorClickNavBar] = useState("inicio");
  const [productosCarrito, setProductosCarrito] = useState([]);
// click navbar
  function clickNavBarToggle(valorBotonNavBar) {
    setValorClickNavBar(valorBotonNavBar)
  }

  // carrito
  function cargarProductosCarrito(producto){
    let index = productosCarrito.findIndex(e => e.codigo === producto.codigo) 
    
      index !== -1 ? productosCarrito[index].cantidad += 1 : setProductosCarrito(previoValor => [...previoValor , producto])
      
    console.log(productosCarrito)
  }

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
