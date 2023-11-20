import BotonGenerico from "../botonGenerico/BotonGenerico";
import { useNavBarContext } from "../contextNavBar/ContextNavBar";
import "./categorias.css"
import {Link} from "react-router-dom"

export  const Categorias = ({productos, kei = crypto.randomUUID()}) => {
  const contextNavBar = useNavBarContext();
  const listaCategoria = Object.keys(productos);

  if(contextNavBar.valorClickNavBar === "categorias"){
    return <>
  <div className="listaCategoriaContainer" key={kei}>
    <div className="cerrarCategorias">
      <BotonGenerico valor="cerrarCategorias" texto="cerrar" key={kei} funcionOModuloAEjecutar={()=>contextNavBar.clickNavBarToggle()}/>
    </div>
    <div className="listaCategoria">
      { listaCategoria.map((e) =><Link to={`/categoria/${e}`}><BotonGenerico texto={e} valor={e} key={kei} /></Link>  ) }
    </div>
  </div>
  </>
  }
  

  
}