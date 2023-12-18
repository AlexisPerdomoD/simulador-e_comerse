import BotonGenerico from "../botonGenerico/BotonGenerico";
import { useNavBarContext } from "../contextNavBar/ContextNavBar"

import "./cartContainer.css"
import { Link } from "react-router-dom";

export const CartContainer = () => {
    const {productosCarrito, valorClickNavBar, clickNavBarToggle} = useNavBarContext();

    function renderCarrito(productos){
        let respuesta = []
            let total = 0
        productos = productos.filter(e => e.cantidad > 0 )
        respuesta = productos.map((e)=>{
            total += e.cantidad * e.precio.toFixed(2)
            return <>
                <li className="productoCarrito" key={e.codigo}>
                <img src={e.imagenes[0] || "/img/logoTest.svg"} alt={e.nombre} width="60px" height="60px" />
                <div className="prodcutoCarritoInformacion">
                    <h4>{e.nombre}</h4>
                    <p>Cantidad: {e.cantidad}</p>
                    <p>Precio: {e.cantidad * e.precio.toFixed(2)}/S</p>
                </div>
            </li>
            </>
        })
        return {respuesta, total}
    }
    let cartItems = renderCarrito(productosCarrito)
 return (valorClickNavBar === "showCart" && <>
    <section className="carritoContainer">
        <div className="cerrarCarrito">
            <BotonGenerico valor="cerrarCarrito" texto="cerrar"  funcionOModuloAEjecutar={()=>clickNavBarToggle()}/>
        </div>
        <ul className="listaProductosCarrito">
            { cartItems.respuesta}
        </ul>
        <div className="generateOrder">
            <p>precio total antes de impuesto:{cartItems.total.toFixed(2)}/S</p>
            <p>precio total 12% impuesto:{(cartItems.total*1.12).toFixed(2)}/S</p>
            <Link to={"/createOrder"}>
                <BotonGenerico texto="Generar orden"/>
            </Link>
            
        </div>
    </section>
    </>)

}