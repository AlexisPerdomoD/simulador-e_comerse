import { doc, getDoc } from "firebase/firestore"
import { db } from "../config/fireBaseConfig"

export const traerFireBaseById = async(bd, id) => {
    const snap = doc(db , bd , id)
    let lastOrder = []
    const docSnap = await getDoc(snap)
    lastOrder = docSnap.exists() ? docSnap.data() : "not found"
    lastOrder.id = id
    return lastOrder
}