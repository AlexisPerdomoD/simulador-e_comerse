import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../config/fireBaseConfig"

export const fireBaseDB = async(parametro, condicion, operador = "==") => {
    const products = parametro? query(collection(db, "products"), where(parametro,operador, condicion )):query(collection(db, "products"));
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
            console.log(productosDB)
        }).catch(error => console.log(error))
    return  productosDB
}