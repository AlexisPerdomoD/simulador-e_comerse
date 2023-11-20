import { useParams } from "react-router-dom"
import { Cartas } from "../cartas/Cartas"
import "./itemListContainer.css"

 const ItemListContaiener = ({ productosAMostrar = null, todoElCatalogo = null  }) => {
  const  parametro = useParams();


  const renderProductosAMostrar = (array) => { 
    let respuesta = array.map(e => <Cartas producto={e} key={e.id}/>)
  return respuesta
}
return<>
  <div className="itemListContainer" >
    <h2 key="greeting">{parametro.categoriaId}</h2>
      <div className="productosMostradosContainer" key="contenedorProductos">
        {productosAMostrar ? renderProductosAMostrar(productosAMostrar[parametro.categoriaId]) : renderProductosAMostrar(todoElCatalogo)}
      </div>
  </div>
  </>
}
export default ItemListContaiener