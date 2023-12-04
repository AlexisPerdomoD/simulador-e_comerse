import { useParams } from "react-router-dom"
import { Cartas } from "../cartas/Cartas"
import "./itemListContainer.css"
import { useNavBarContext } from "../contextNavBar/ContextNavBar";

 const ItemListContaiener = ({ productosAMostrar = null, todoElCatalogo = null  }) => {
  const  parametro = useParams();
  const {clickNavBarToggle} = useNavBarContext()


  const renderProductosAMostrar = (array) => { 
    let respuesta = array.map(e => <Cartas producto={e} key={e.codigo}/>)
  return respuesta
}
return<>
  <div className="itemListContainer" onClick={()=>clickNavBarToggle("")}>
    <h2 key="greeting">{parametro.categoriaId}</h2>
      <div className="productosMostradosContainer">
        {productosAMostrar ? renderProductosAMostrar(productosAMostrar[parametro.categoriaId]) : renderProductosAMostrar(todoElCatalogo)}
      </div>
  </div>
  </>
}
export default ItemListContaiener