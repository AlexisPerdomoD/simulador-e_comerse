import BotonGenerico from "../botonGenerico/BotonGenerico";
import { useNavBarContext } from "../contextNavBar/ContextNavBar";
import "./categorias.css"
import {Link} from "react-router-dom"

export  const Categorias = () => {
  const contextNavBar = useNavBarContext();
  const listaCategoria = ["Frutas Frescas","Verduras Orgánicas","Productos Lácteos Locales","Hierbas Aromáticas","Miel y Productos Apícolas","Productos Panificados","Productos Secos y Frutos Secos","Bebidas-Locales","otros"];

  if(contextNavBar.valorClickNavBar === "categorias"){
    return <>
  <div className="listaCategoriaContainer">
  <div className="cerrarCategorias">
      <BotonGenerico valor="cerrarCategorias" texto="cerrar"  funcionOModuloAEjecutar={()=>contextNavBar.clickNavBarToggle()}/>
    </div>
    <div className="listaCategoria">
      { listaCategoria.map(e => <Link to={`/categoria/${e}`} key={e}><BotonGenerico texto={e} valor={e} kei={e + Math.random} /></Link>  ) }
    </div>
  </div>
  </>
  }
  

  
}