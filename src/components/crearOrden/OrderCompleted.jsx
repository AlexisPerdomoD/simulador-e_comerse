
import { useGlobalContext } from "../contextGLobal/ContextGlobal";

export default function OrderCompleted() {
    const {lastOrder} = useGlobalContext()
    return (lastOrder.isLoading ? <h2>Esperando comprobante de orden, ya casi estamos listos</h2> :
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
                <div className="order-information">
                    <h2 className="order-information__title">Esta orden esta hecha a nombre de:</h2>
                    <div className="buyer__information">
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
                    <div className="product-list">
                        <h3 className="order-information__title">Estos son los detalles de los productos en la orden</h3>
                        <ol className="ordered_list">
                            {lastOrder.value.items.map(p =>{
                                return (
                                    <li className="List-item">
                                        <img src={p.imagenes[0]} alt={p.nombre} />
                                        <div>
                                            <p>{p.nombre}</p>
                                            <p>cantidad:{p.cantidad}</p>
                                            <p>precio:{p.precio}</p>
                                        </div>
                                    </li>)
                            })}
                        </ol>
                        <div className="order-information__general">
                            <h4 className="order__sent">Fecha de compra:{lastOrder.value.time}</h4>
                            <h4 className="total__price">Precio total pagado incluyendo impuestos: {lastOrder.value.total}</h4>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </section>
    )
}