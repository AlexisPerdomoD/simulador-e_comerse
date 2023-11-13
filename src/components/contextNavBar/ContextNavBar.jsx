import { createContext, useContext, useState } from "react";

const ContextNavBar = createContext();

{/*funcion generadora de contexto para determianr el valor del ultimo boton precionado en mi navBar */}

export const ClickNavBarProvider = ({children})=>{ 
  const [valorClickNavBar, setValorClickNavBar] = useState("inicio");
  
   function clickNavBarToggle(valorBotonNavBar) {
    setValorClickNavBar(valorBotonNavBar)
  }
  return <>
  <ContextNavBar.Provider value={{valorClickNavBar, clickNavBarToggle}}>
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

