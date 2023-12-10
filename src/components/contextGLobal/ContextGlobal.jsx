import { createContext, useContext, useState } from "react";
import { fireBaseDB } from "../../assets/fireBaseDB";

const ContextGlobal = createContext();

{/*parametros para ser usados en App.jsx osea children = main.jsx */}

export const GlobalProvider = ({children})=>{ 
   // contexto productos de base de datos
   const [productos, setProductos] = useState({catalogo:null, isLoading:true })

   function traerFirebaseDB(parametros){
       setProductos(fireBaseDB(parametros))
   }
  return <>
  <ContextGlobal.Provider value={{productos, traerFirebaseDB}}>
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

