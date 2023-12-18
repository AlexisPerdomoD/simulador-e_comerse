
import estilo from "./botonGenerico.module.css"
const BotonGenerico = ( {valor = null ,texto = "boton", claseAdicional = "", funcionOModuloAEjecutar = ()=>{} }) => {
return <>
  <button className={`${estilo.boton}  ${claseAdicional}`} value={valor}  onClick={funcionOModuloAEjecutar}>
    {texto} 
    </button>
</>
}

export default BotonGenerico