import { useEffect, useState } from "react"
import estilo from "./botonGenerico.module.css"
const BotonGenerico = ( {valor,texto, claseAdicional = "", funcionOModuloAEjecutar = ()=>{} }) => {
 const [clickBoton , setClickBoton] = useState(false);
 useEffect(funcionOModuloAEjecutar, []);
return <>
  <button className={`${estilo.boton}  ${claseAdicional}`} value={valor} >
    {texto} 
    </button>
</>
}

export default BotonGenerico