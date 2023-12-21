import { Route, Routes } from "react-router-dom"
import ItemListContaiener from "../itemListContainer/ItemListContainer"
import { ItemDetailContainer } from "../itemDetailContainer/ItemDetailContainer"
import { SobreNosotros } from "../sobreNosotros/SobreNosotros"
import { Contactanos } from "../contactanos/Contactanos"
import CrearOrden from "../crearOrden/CrearOrden"
import { OrderCompleted } from "../crearOrden/OrderCompleted"


export const CuerpoPrincipal = () => {
  
  return <>
    <main>
    <Routes>
              <Route exact path='/' element ={ <ItemListContaiener />}/>
              <Route exact path='/categoria/:categoriaId' element = {<ItemListContaiener/>}/>
              <Route exact path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route exact path='/sobreNosotros' element={<SobreNosotros/>}/>
              <Route exact path='/contactanos' element={<Contactanos/>}/>
              <Route exact path='/createOrder' element={<CrearOrden/>}/>
              <Route exact path='/orderCompleted' element={<OrderCompleted/>}/>
    </Routes>
      
    </main>
  </>
}