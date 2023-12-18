import { useParams } from "react-router-dom"
import { Cartas } from "../cartas/Cartas"
import "./itemListContainer.css"
import { useNavBarContext } from "../contextNavBar/ContextNavBar";
import { useGlobalContext } from "../contextGLobal/ContextGlobal";
import { useEffect } from "react";


const ItemListContaiener = () => {
  const  {categoriaId} = useParams();
  const {clickNavBarToggle} = useNavBarContext();
  const {traerFirebaseDB, products} = useGlobalContext();

  //
  useEffect(()=>{ categoriaId ? traerFirebaseDB("categoria", categoriaId) : traerFirebaseDB()} , [categoriaId])


  const renderProductosAMostrar = (array) => { 
    let respuesta = array.map(e => <Cartas producto={e} key={e.id}/>)
  return respuesta
}
return<>
  <div className="itemListContainer" onClick={()=>clickNavBarToggle("")}>
    <h2 key="greeting">{categoriaId ? categoriaId : "bienvenido a todo nuestro catalogo"}</h2>
      <div className="productosMostradosContainer">
        {products.isLoading ?<h2>cargando...</h2> : renderProductosAMostrar(products.catalogo)}
      </div>
  </div>
  </>
}
export default ItemListContaiener