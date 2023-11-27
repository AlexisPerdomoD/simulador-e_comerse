import { useParams } from "react-router-dom"
import { destructurador } from "../../assets/destructurador";
import { useState } from "react";
import BotonGenerico from "../botonGenerico/BotonGenerico";
import "./itemDetailContainer.css"


export const ItemDetailContainer = ({productos}) => {
  const {itemId} = useParams();
  const [cont, setCont]= useState(0)
  let producto = destructurador(productos).find(e => e.codigo === parseInt(itemId));
const moverlista = (valor)=> {
    if(valor === -1 && cont === 0){
      setCont(producto.imagenes.length-1)
    }else if(valor === 1 && cont === producto.imagenes.length-1){
      setCont(0)
    }else{
      setCont(cont + valor)
    }
}
return <>
<div className="itemListContainer">
  <div className="itemImagen">
    <img src={producto.imagenes[cont]} alt={`imagen descriptiva de ${producto.nombre}`} />
    <div className="botonesContainer">
    <BotonGenerico kei={()=>crypto.randomUUID()} texto="Atras" funcionOModuloAEjecutar={()=>moverlista(-1)}/>
    <BotonGenerico kei={()=>crypto.randomUUID()} texto="siguiente" funcionOModuloAEjecutar={()=>moverlista(1)}/>
    </div>
  </div>
  <div className="itemInformacion">
    <h3 className="itemTitulo titulo">{producto.nombre}</h3>
    <p className="itemDescripcion descripcion">{producto.descripcion}</p>
    <p className="precio"><strong style={{color:"var(--colorSecundario)",fontSize:"2rem"}}>S/{producto.precio} cada unidad</strong></p>

    < BotonGenerico texto="agregar a carrito" claseAdicional="botonAgregarCarrito" />
  </div>

</div>
</>
}
