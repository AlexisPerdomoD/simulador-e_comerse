import { BotonCarta } from "../botonCarta/BotonCarta"
import { useNavBarContext } from "../contextNavBar/ContextNavBar"

export  function RenderCarrito(productos, botones = false){
    const {productosCarrito} = useNavBarContext()
    let respuesta = []
        let total = 0
        let cantidad = 0
    respuesta = productos.filter(e => e.cantidad > 0 )
    respuesta = respuesta.map((e)=>{
        total += e.cantidad * e.precio.toFixed(2)
        cantidad += e.cantidad
        return <>
                <li className="productoCarrito" key={e.codigo}>
                <img src={e.imagenes[0] || "/img/logoTest.svg"} alt={e.nombre} width="60px" height="60px" />
                <div className="productoCarritoInformacion">
                    <h4>{e.nombre}</h4>
                    <p>Cantidad: {e.cantidad}</p>
                    <p>Precio: {e.cantidad * e.precio.toFixed(2)}/S</p> 
                    {botones && <BotonCarta productosCarrito={productosCarrito} producto={e}/>}                
                </div>
            </li>
        </>
    })
    return {respuesta, total , cantidad}
}