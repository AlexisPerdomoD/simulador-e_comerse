import {   useState } from "react"
import { useNavBarContext } from "../contextNavBar/ContextNavBar"
import { RenderCarrito } from "../cartContainer/RenderCarrito"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../config/fireBaseConfig"
import {  useNavigate } from 'react-router-dom';
import { useGlobalContext } from "../contextGLobal/ContextGlobal"

export default function CrearOrden() {
    const {productosCarrito, cargarProductosCarrito, clickNavBarToggle} = useNavBarContext()
    const {traerLastOrder} = useGlobalContext()
    const [entradas, setEntradas] = useState([])
    const navigate = useNavigate();

    const inputCheck = () => {
        let nombre = document.getElementById("nombre").value
        let apellido = document.getElementById("apellido").value
        let telefono = document.getElementById("telefono").value
        let email = document.getElementById("email").value
        let email2 = document.getElementById("email2").value
        let entradasRequeridas = [nombre, apellido, telefono , email, email2]
        let botonSubmit = document.getElementById("button__submit");

        let res = entradasRequeridas.some(e => !Boolean(e) )
        if(!res && email === email2 && productosCarrito.length > 0){
            botonSubmit.disabled = false
            botonSubmit.style.backgroundColor = "green"
            botonSubmit.textContent = "Hacer pedido"
        }
        setEntradas(entradasRequeridas)
    }

    const enviarOrden = (event) =>{
        event.preventDefault();
        const order ={
            "buyer": {
                "nombre" :entradas[0],
                "apellido":entradas[1],
                "telefono":entradas[3],
                "email":entradas[4]
            },
            "items": productosCarrito,
            "time" : new Date().toLocaleString(),
            "total": (cartItems.total*1.12).toFixed(2),
        }
        
        addDoc(collection(db , "orders") , order).then(({id})=>{
            console.log(id)
            cargarProductosCarrito(false , 0)
            traerLastOrder("orders", id)
        })
    }
    
    let cartItems = RenderCarrito(productosCarrito , true)
    return (productosCarrito.length < 1 ? <h2>por favor agrega productos para comprar </h2> : <>
    <section className="section" onClick={()=>clickNavBarToggle("")}>
        <div className="container">
            <div className="hero__content hero--center">
                <h2 className="hero__title">
                    ingrese los datos para generar su compra
                </h2>
                <p className="hero__lead">
                    Es importante que llenes correctamente todos los campos ya que sera la forma en la que nos mantendremos en contacto para hacerte llegar todas las updates necesarias en el proceso de envio de tu pedido
                </p>
            </div>
            <form className="hero__content ma"  action="" id="order" onSubmit={(event)=>{enviarOrden(event);navigate('/orderCompleted')}}>
                <div className="container__flex section-sm">
                    <label className="label">
                        <p>Nombres*</p>
                        <input type="text" className="input" required placeholder="alexis j" id="nombre" onChange={()=>inputCheck()}/>
                    </label>
                    <label className="label">
                        <p>Apellidos*</p>
                        <input type="text" className="input" required placeholder="Perdomo Diaz" id="apellido"  onChange={()=>inputCheck()}/>
                    </label>
                    <label className="label">
                        <p>Telefono*</p>
                        <input type="text" className="input" required placeholder="606505505" id="telefono"  onChange={()=>inputCheck()}/>
                    </label>
                    <label className="label">
                        <p>Email*</p>
                        <input type="email" className="input" required placeholder="ale@mail.com" id="email"  onChange={()=>inputCheck()}/>
                    </label>
                    <label className="label">
                        <p>Verificar email*</p>
                        <input type="email" className="input" required placeholder="ale@mail.com" id="email2"  onChange={()=>inputCheck()}/>
                        { (entradas[4] || entradas[3]) && <p className="alarm__email">ambos campos de correo deben ser iguales</p>}
                    </label>
                </div>
                
                <ul className="order__items ">
                    {cartItems.respuesta}
                </ul>
                <button type="submit" id="button__submit" className="button__primary ma" disabled>
                    En espera
                </button>
            </form>
        </div>
    </section>
    </>)
}