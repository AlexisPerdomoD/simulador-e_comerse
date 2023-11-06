import { Cartas } from "../cartas/Cartas"

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
      <div className="productosMostradosContainer d-flex  p-2 flex-wrap" key="contenedorProductos">
        {renderProductosAMostrar(productosAMostrar)}
      </div>
  </div>
  </>
}
export default ItemListContaiener