
import { useGlobalContext } from "../contextGLobal/ContextGlobal";
import "./ordenCreada.css"

export  function OrderCompleted() {
    const {lastOrder} = useGlobalContext()
    return (lastOrder.isLoading ? <h2 className="hero__title">Esperando comprobante de orden, ya casi estamos listos</h2> :
        <section className="section-lg">
            <div className="container">
                <div className="hero__content">
                    <h2 className="hero__title">
                        Tu orden ha sido recibida, muchas gracias por comprar en nuestra tienda
                    </h2>
                    <p className="hero__lead">
                        aqui dejamos un registro y detalles de tu compra, estaremos poniendonos en contacto para que puedas disfrutar lo mas pronto posible de nuetros productos!
                    </p>
                </div>
                <div className="order__information">
                    <div className="buyer__information">
                    <h2 className="order__information__title">Esta orden esta hecha a nombre de:</h2>
                        <div className="buyer__item">
                            <h3>Nombre: {lastOrder.value.buyer.nombre}</h3>
                        </div>
                        <div className="buyer__item">
                            <h3>Apellido: {lastOrder.value.buyer.apellido}</h3>
                        </div>
                        <div className="buyer__item">
                            <h3>Telefono: {lastOrder.value.buyer.telefono}</h3>
                        </div>
                        <div className="buyer__item">
                            <h3>Email: {lastOrder.value.buyer.email}</h3>
                        </div>
                    </div>
                <section className="section">
                    <div className="product__list">
                        <h3 className="order__information__title">Estos son los detalles de los productos en la orden:</h3>
                        <ol className="ordered__list">
                            {lastOrder.value.items.map(p =>{
                                return (
                                    <li className="list__item" key={p.id}>
                                        <img src={p.imagenes[0]} alt={p.nombre} width={"150px"} height={"160px"} />
                                        <div>
                                            <p>{p.nombre}</p>
                                            <p>Descripcion: {p.descripcion}</p>
                                            <p>Cantidad: {p.cantidad}</p>
                                            <p>Precio:{p.precio}/S</p>
                                        </div>
                                    </li>)
                            })}
                        </ol>
                        <div className="order__information__general">
                            <h4 className="order__sent">Fecha de compra:{lastOrder.value.time}</h4>
                            <h4 className="order__id">id de compra: {lastOrder.value.id}</h4>
                            <h4 className="total__price">Precio total pagado incluyendo impuestos: {lastOrder.value.total}/S</h4>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </section>
    )
}