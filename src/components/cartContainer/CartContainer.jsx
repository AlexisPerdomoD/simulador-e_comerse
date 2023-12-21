import BotonGenerico from "../botonGenerico/BotonGenerico";
import { useNavBarContext } from "../contextNavBar/ContextNavBar"
import { RenderCarrito } from "./RenderCarrito";

import "./cartContainer.css"
import { Link } from "react-router-dom";

export const CartContainer = () => {
    const {productosCarrito, valorClickNavBar, clickNavBarToggle} = useNavBarContext();
    let cartItems = RenderCarrito(productosCarrito)
 return (valorClickNavBar === "showCart" && <>
    <section className="carritoContainer">
        <div className="closeCarrito">
            <BotonGenerico valor="cerrarCarrito" texto="cerrar"  funcionOModuloAEjecutar={()=>clickNavBarToggle("")}/>
        </div>
        <ul className="listProductsCarrito">
            { cartItems.respuesta}
        </ul>
        <div className="generateOrder">
            {cartItems.cantidad !==0 && <p>precio total de {cartItems.cantidad} item(s) antes de impuesto:{cartItems.total.toFixed(2)}/S </p>}
            {cartItems.cantidad !==0 && <p>precio total 12% impuesto:{(cartItems.total*1.12).toFixed(2)}/S</p>}
            {cartItems.cantidad ===0 && <p>Por favor agregue un producto</p>}

            {productosCarrito.length > 0 && <Link to={"/createOrder"}><BotonGenerico texto="Generar orden" claseAdicional="button__primary" funcionOModuloAEjecutar={()=>clickNavBarToggle("")}/></Link>}
            
            
        </div>
    </section>
    </>)

}