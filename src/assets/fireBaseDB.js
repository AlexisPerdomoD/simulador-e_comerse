import { collection, getDoc, query, where } from "firebase/firestore"
import { db } from "../config/fireBaseConfig"

export const fireBaseDB = (parametro, condicion, operador = "==") => {
    const products = parametro? query(collection(db, "products"), where(parametro,operador, condicion )):query(collection(db, "products"));

    let productosDB;
    getDoc(products)
    .then(resp =>{
             productosDB = resp.docs.map(doc =>{
                const product ={
                    id: doc.id,
                    ...doc.data()
                    }
                return product
                }
            )
        }
    ).catch(error => console.error(error))
    console.log(productosDB)
    return productosDB
}