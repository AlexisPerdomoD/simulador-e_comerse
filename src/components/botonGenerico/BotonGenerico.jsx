import estilo from "./botonGenerico.module.css"
const BotonGenerico = ({valor,texto, claseAdicional =""}) => {
return <>
  <button className={`${estilo.boton}  ${claseAdicional}`} value = {valor} >
    {texto} 
    </button>
</>
}

export default BotonGenerico