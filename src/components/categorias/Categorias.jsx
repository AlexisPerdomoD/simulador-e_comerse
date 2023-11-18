import BotonGenerico from "../botonGenerico/BotonGenerico";
import { useNavBarContext } from "../contextNavBar/ContextNavBar";
import productos from "/estudios/reactCoderHouse/proyecto/e-comerse-vite/src/info.json"
import "./categorias.css"

export  const Categorias = ({categoriaToggle}) => {
  const listaCategoria = Object.keys(productos) //cambiar a traer como parametro 
  const contextNavBar = useNavBarContext()
  

  return <>
  <div className="listaCategoriaContainer">
    <div className="cerrarCategorias">
      <BotonGenerico valor="cerrarCategorias" texto="cerrar" funcionOModuloAEjecutar={()=>contextNavBar.clickNavBarToggle(null)}/>
    </div>
    <div className="listaCategoria">
      { listaCategoria.map((e) => <BotonGenerico texto={e} valor={e} key={`categoria-${e}`} funcionOModuloAEjecutar={()=> {categoriaToggle(e)}} />  ) }
    </div>
  </div>
  </>
}