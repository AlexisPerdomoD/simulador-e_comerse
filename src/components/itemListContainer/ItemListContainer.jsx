import { Cartas } from "../cartas/Cartas"
import "./itemListContainer.css"

 const ItemListContaiener = ({ greeting , productosAMostrar }) => {
  const renderProductosAMostrar = (array) => { 
    let respuesta = array.map(e => <Cartas producto={e} key={e.id}/>)
  return respuesta
  }
  return<>
  <div className="itemListContainer" >
    <h2 key="greeting">{greeting}</h2>
      <div className="productosMostradosContainer" key="contenedorProductos">
        {renderProductosAMostrar(productosAMostrar)}
      </div>
  </div>
  </>
}
export default ItemListContaiener