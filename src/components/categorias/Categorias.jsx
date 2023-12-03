import BotonGenerico from "../botonGenerico/BotonGenerico";
import { useNavBarContext } from "../contextNavBar/ContextNavBar";
import "./categorias.css"
import {Link} from "react-router-dom"

export  const Categorias = ({productos}) => {
  const contextNavBar = useNavBarContext();
  const listaCategoria = Object.keys(productos);

  if(contextNavBar.valorClickNavBar === "categorias"){
    return <>
  <div className="listaCategoriaContainer">
    <div className="cerrarCategorias">
      <BotonGenerico valor="cerrarCategorias" texto="cerrar"  funcionOModuloAEjecutar={()=>contextNavBar.clickNavBarToggle()}/>
    </div>
    <div className="listaCategoria">
      { listaCategoria.map((e, index) =><Link to={`/categoria/${e}`}><BotonGenerico texto={e} valor={e} key={index} /></Link>  ) }
    </div>
  </div>
  </>
  }
  

  
}