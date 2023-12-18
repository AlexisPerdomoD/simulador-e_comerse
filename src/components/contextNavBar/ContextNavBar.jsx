import { createContext, useContext, useState } from "react";

const ContextNavBar = createContext();

export const ClickNavBarProvider = ({children})=>{ 
  // click navbar
  const [valorClickNavBar, setValorClickNavBar] = useState("inicio")

  function clickNavBarToggle(valorBotonNavBar) {
    setValorClickNavBar(valorBotonNavBar)
  };
  
  // carrito
  const [productosCarrito, setProductosCarrito] = useState([])

  function cargarProductosCarrito(producto, cantidad){
    let index = productosCarrito.findIndex(e => e.codigo === producto.codigo) 
    if(index !== -1){
      let res = productosCarrito
      res[index].cantidad = cantidad
      setProductosCarrito(res)

      if(productosCarrito[index].cantidad < 1){
        let res = productosCarrito.filter(e => e.cantidad > 0 )
        console.log(res)
        setProductosCarrito(res)
        
      }
    }else{
      setProductosCarrito(previoValor => [...previoValor , producto])
    }
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
