import BotonGenerico from "../botonGenerico/BotonGenerico";
import { useNavBarContext } from "../contextNavBar/ContextNavBar"
import "./cartContainer.css"

export const CartContainer = () => {
    const {productosCarrito, valorClickNavBar, clickNavBarToggle} = useNavBarContext();
        
        function renderCarrito(productos){
            let respuesta = {
                productos : [],
                total: 0
            }
            respuesta.productos = productos.map((e)=>{
                return <>
                 <li className="productoCarrito">
                    <img src={e.imagenes[0] || "/img/logoTest.svg"} alt={e.nombre} width="60px" height="60px" />
                    <div className="prodcutoCarritoInformacion">
                        <h4>{e.nombre}</h4>
                        <p>Cantidad: {e.cantidad}</p>
                        <p>Precio: {e.cantidad * e.precio}</p>
                    </div>
                </li>
                </>
            })
            return respuesta
        }
    if(valorClickNavBar === "showCart"){
        return <>
            <section className="carritoContainer">
            <div className="cerrarCarrito">
                <BotonGenerico valor="cerrarCarrito" texto="cerrar"  funcionOModuloAEjecutar={()=>clickNavBarToggle()}/>
            </div>
            <ul className="listaProductosCarrito">
                { renderCarrito(productosCarrito).productos}
            </ul>

            </section>
            </>
    }
    
}