import { Cartas } from "../cartas/Cartas"
import "./itemListContainer.css"

 const ItemListContaiener = ({ greeting , productosAMostrar }) => {
  const renderProductosAMostrar = (array) => { 
    let respuesta =[]
    for (const e of array) {
      respuesta.push(<Cartas producto={e}/>)
    }
  return respuesta
  }
  return<>
  <div className="itemListContainer" key={"itemListContainer"}>
    <h2 key="greeting">{greeting}</h2>
      <div className="productosMostradosContainer" key="contenedorProductos">
        {renderProductosAMostrar(productosAMostrar)}
      </div>
  </div>
  </>
}
export default ItemListContaiener