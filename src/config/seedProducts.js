import { addDoc, collection } from "firebase/firestore";
import { destructurador } from "../assets/destructurador"
import { db } from "./fireBaseConfig";
import info from "../info.json"


export const seedProducts = () => {
    let products = destructurador(info);
    products.forEach(product =>{
        addDoc(collection(db, "products"), product)
    })
}



