import {BsMinecart} from "react-icons/bs";
import { useNavBarContext } from "../contextNavBar/ContextNavBar";
import "./cartWidget.css"
import { useEffect, useState } from "react";
export const CartWidget = () => {
  const {productosCarrito, clickNavBarToggle} = useNavBarContext()
  const contadorProductos = (p) => {
    let res = 0
    p.forEach(e => res += e.cantidad);
    return res
  } 
  const [renderKey, setRenderKey] = useState(false)
  useEffect(()=>{
    setRenderKey(e => !e)
  },[productosCarrito])
  
  return <div className="carritoIcon" onClick={()=>clickNavBarToggle("showCart")}>
    <BsMinecart size={"36px"} title="cart"className="icon" color=""/>
    {(productosCarrito && productosCarrito.filter(e => e.cantidad > 0).length !== 0 ) && <h4>{contadorProductos(productosCarrito)}</h4>}
  </div>
}