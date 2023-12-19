import {BsMinecart} from "react-icons/bs";
import { useNavBarContext } from "../contextNavBar/ContextNavBar";
import "./cartWidget.css"
export const CartWidget = () => {
  const {productosCarrito, clickNavBarToggle} = useNavBarContext()
  
  return <div className="carritoIcon" onClick={()=>clickNavBarToggle("showCart")}>
    <BsMinecart size={"40px"} title="cart"className="icon"/>
    {(productosCarrito && productosCarrito.filter(e=>e.cantidad>0).length !== 0 ) && <h4>{productosCarrito.filter(e=>e.cantidad>0).length}</h4>}
  </div>
}