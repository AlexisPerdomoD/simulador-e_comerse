import {BsMinecart} from "react-icons/bs";
import { useNavBarContext } from "../contextNavBar/ContextNavBar";
import "./cartWidget.css"
export const CartWidget = ({contextoNavBar}) => {
  const {productosCarrito} = useNavBarContext()
  
  return <div className="carritoIcon" onClick={()=>contextoNavBar("showCart")}>
    <BsMinecart size={"40px"} title="cart"className="icon"/>
    <h4>{productosCarrito.length !== 0 && productosCarrito.length}</h4>
  </div>
}