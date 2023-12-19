import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../config/fireBaseConfig"

export const fireBaseDB = async(parametro, condicion, operador = "==", bd = "products") => {
    const products = parametro ? query(collection(db, bd), where(parametro,operador, condicion )) : query(collection(db, bd));
    let productosDB = []
    await  getDocs(products)
        .then(resp =>{
              productosDB = resp.docs.map(data =>{
                const product ={
                    id: data.id,
                    ...data.data()
                    }
                return product
                }
            )
        }).catch(error => console.log(error))
    return  productosDB
}