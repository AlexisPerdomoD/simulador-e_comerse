import { createContext, useContext, useState } from "react";
import { fireBaseDB } from "../../assets/fireBaseDB";
import { traerFireBaseById } from "../../assets/traerFireBaseById";

const ContextGlobal = createContext();

{/*parametros para ser usados en App.jsx osea children = main.jsx */}

export const GlobalProvider = ({children})=>{ 
   // contexto productos de base de datos
   const [products, setProducts] = useState({catalogo:null, isLoading:true })

   const  traerFirebaseDB= async(...parametros) =>{
      try {
        const respuesta = await fireBaseDB(...parametros);
        setProducts({catalogo:respuesta, isLoading:false})
      } catch (error) {
        console.log(error)
      }
   }
  //  contexto para ultima orden realizada 
  const [lastOrder, setLastOrder] = useState({value:null, isLoading:true })

  const traerLastOrder = async(...parametros) => {
    try {
      const respuesta = await traerFireBaseById(...parametros);
      setLastOrder({value:respuesta, isLoading:false})
    } catch (error) {
      console.error(error)
    }
  }  

  return <>
  <ContextGlobal.Provider value={{products, traerFirebaseDB, lastOrder, traerLastOrder}}>
    {children}
  </ContextGlobal.Provider>
  </>
}

{/* hook personalizado para evitar exportaciones de usecontext en otros modulos y verificar que se esta dentro de la jerarquia*/}

export const useGlobalContext = () => {
  const contexto = useContext(ContextGlobal);
  if (!contexto){throw new Error("contexto fuera de la jerarquia")}
  return contexto
}

