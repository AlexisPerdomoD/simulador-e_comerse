import { addDoc, collection } from "firebase/firestore";
import { destructurador } from "../assets/destructurador"
import { db } from "./fireBaseConfig";


export const seedProducts = (productos) => {
    let products = destructurador(productos);
    products.forEach(product =>{
        addDoc(collection(db, "products"), product)
    })
}



