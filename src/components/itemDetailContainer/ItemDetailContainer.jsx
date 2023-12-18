import { useParams } from "react-router-dom"
import { destructurador } from "../../assets/destructurador";
import { useEffect, useState } from "react";
import BotonGenerico from "../botonGenerico/BotonGenerico";
import "./itemDetailContainer.css"
import { useNavBarContext } from "../contextNavBar/ContextNavBar";
import { useGlobalContext } from "../contextGLobal/ContextGlobal";


export const ItemDetailContainer = ({productos}) => {
  const {clickNavBarToggle} = useNavBarContext();
  const {products, traerFirebaseDB} = useGlobalContext();
  const {itemId} = useParams();
  const [cont, setCont]= useState(0)
  let producto = products.catalogo;
const moverlista = (valor)=> {
    if(valor === -1 && cont === 0){
      setCont(producto[0].imagenes.length-1)
    }else if(valor === 1 && cont === producto[0].imagenes.length-1){
      setCont(0)
    }else{
      setCont(cont + valor)
    }
}
useEffect(()=>{ itemId && traerFirebaseDB("codigo", parseInt(itemId))} , [itemId])
return (!products.isLoading?<>
<div className="itemListContainerDetail" onClick={()=>clickNavBarToggle("")}>
  <div className="itemImagen">
    <img src={producto[0].imagenes[cont]} alt={`imagen descriptiva de ${producto.nombre}`} />
    <div className="botonesContainer">
    <BotonGenerico texto="Atras" funcionOModuloAEjecutar={()=>moverlista(-1)}/>
    <BotonGenerico texto="siguiente" funcionOModuloAEjecutar={()=>moverlista(1)}/>
    </div>
  </div>
  <div className="itemInformacion">
    <h3 className="itemTitulo titulo">{producto.nombre}</h3>
    <p className="itemDescripcion descripcion">{producto.descripcion}</p>
    <p className="precio"><strong style={{color:"var(--colorSecundario)",fontSize:"2rem"}}>S/{producto.precio} cada unidad</strong></p>

    < BotonGenerico texto="agregar a carrito" claseAdicional="botonAgregarCarrito" />
  </div>

</div>
</>: <h2>Cargando...</h2>)
}
