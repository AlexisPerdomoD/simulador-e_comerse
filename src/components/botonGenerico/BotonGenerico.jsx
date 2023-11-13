
import estilo from "./botonGenerico.module.css"
const BotonGenerico = ( {valor ,texto ,kei = null, claseAdicional = "", funcionOModuloAEjecutar = ()=>{} }) => {
return <>
  <button className={`${estilo.boton}  ${claseAdicional}`} value={valor} key={kei} onClick={funcionOModuloAEjecutar}>
    {texto} 
    </button>
</>
}

export default BotonGenerico