
import "./botonGenerico.css"
const BotonGenerico = ( {valor = null ,texto = "boton", claseAdicional = "", funcionOModuloAEjecutar = ()=>{} }) => {
return <>
  <button className={`button  ${claseAdicional}`} value={valor}  onClick={funcionOModuloAEjecutar}>
    {texto} 
    </button>
</>
}

export default BotonGenerico