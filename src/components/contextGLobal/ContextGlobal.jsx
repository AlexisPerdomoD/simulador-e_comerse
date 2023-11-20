import { createContext, useContext, useState } from "react";

const ContextGlobal = createContext();

{/*plantilla generica de context para implementar luego */}

export const ClickNavBarProvider = ({children})=>{ 
  const [valorClick, setValorClick] = useState("");
  
   function clickToggle(valorBoton) {
    setValorClick(valorBoton)
  }
  return <>
  <ContextGlobal.Provider value={{valorClick, clickToggle}}>
    {children}
  </ContextGlobal.Provider>
  </>
}

{/* hook personalizado para evitar exportaciones de usecontext en otros modulos y verificar que se esta dentro de la jerarquia*/}

export const useNavBarContext = () => {
  const contexto = useContext(ContextGlobal);
  if (!contexto){throw new Error("contexto fuera de la jerarquia")}
  return contexto
}

