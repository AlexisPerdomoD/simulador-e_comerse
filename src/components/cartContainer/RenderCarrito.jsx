import { BotonCarta } from "../botonCarta/BotonCarta"
import { useNavBarContext } from "../contextNavBar/ContextNavBar"

export  function RenderCarrito(productos, botones = false, measure = ["60px", "60px"]){
    const {productosCarrito} = useNavBarContext()
    let respuesta = []
        let total = 0
        let cantidad = 0
    respuesta = productos.filter(e => e.cantidad > 0 )
    respuesta = respuesta.map((e)=>{
        total += e.cantidad * e.precio.toFixed(2)
        cantidad += e.cantidad
        return  <li className="productCarrito" key={e.id}>
                <img src={e.imagenes[0] || "/img/logoTest.svg"} alt={e.nombre} width={measure[0]} height={measure[1]} />
                <div className="productCarritoInformation">
                    <h4>{e.nombre}</h4>
                    <p>Cantidad: {e.cantidad}</p>
                    <p>Precio: {e.cantidad * e.precio.toFixed(2)}/S</p> 
                    {botones && <BotonCarta productosCarrito={productosCarrito} producto={e}/>}                
                </div>
            </li>

    })
    return {respuesta, total , cantidad}
}