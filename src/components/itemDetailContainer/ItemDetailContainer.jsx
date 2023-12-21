import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import BotonGenerico from "../botonGenerico/BotonGenerico";
import "./itemDetailContainer.css"
import { useNavBarContext } from "../contextNavBar/ContextNavBar";
import { useGlobalContext } from "../contextGLobal/ContextGlobal";
import { BotonCarta } from "../botonCarta/BotonCarta";


export const ItemDetailContainer = () => {
  const {clickNavBarToggle, productosCarrito} = useNavBarContext();
  const {products, traerFirebaseDB} = useGlobalContext();
  const {itemId} = useParams();
  // contador para pasar imagenes 
  const [cont, setCont]= useState(0)

  let producto = products.catalogo;

const moverlista = (valor)=> {
    if(valor === -1 && cont === 0){
      setCont(producto[0].imagenes.length-1)
    }else if(valor === 1 && cont === producto[0].imagenes.length-1){
      setCont(0)
    }else{
      setCont(pre => pre + valor)
    }
}

useEffect(()=>{ itemId && traerFirebaseDB("codigo", +itemId)} , [itemId])

return (products.isLoading ?  <h2>Cargando...</h2> : (producto.length === 0 ? <h2 className="hero__title ma">Producto no encontrado</h2>:<section className="section">
<div className="itemListContainerDetail container" onClick={()=>clickNavBarToggle("")}>
  <div className="itemImagen">
    <img src={producto[0].imagenes[cont]} alt={`imagen descriptiva de ${producto[0].nombre}`} />
    <div className="buttonImg--container">
    <BotonGenerico texto="Atras" funcionOModuloAEjecutar={()=>moverlista(-1)}/>
    <BotonGenerico texto="siguiente" funcionOModuloAEjecutar={()=>moverlista(1)}/>
    </div>
  </div>
  <div className="item__information">
    <h3 className="item__title">{producto[0].nombre}</h3>
    <p className="item__description">{producto[0].descripcion}</p>
    <p className="precio"><strong>S/{producto[0].precio} cada unidad</strong></p>

    <div className="buttonContainer">
      <BotonCarta productosCarrito={productosCarrito} producto={producto[0]}/>

    </div>
  </div>

</div>
</section> )
)

}
