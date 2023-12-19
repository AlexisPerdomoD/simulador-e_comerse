import { Header } from './components/header/Header';
import {ClickNavBarProvider} from "./components/contextNavBar/ContextNavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContaiener from './components/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { SobreNosotros } from './components/sobreNosotros/SobreNosotros';
import { Contactanos } from './components/contactanos/Contactanos';
import CrearOrden from './components/crearOrden/CrearOrden';
import OrderCompleted from './components/crearOrden/orderCompleted';




function App() {
    
    return (
    <>
    <ClickNavBarProvider>
      <BrowserRouter>
      {/* header */}
        <Header/>
        {/* main */}
          <Routes>
            <Route exact path='/' element ={ <ItemListContaiener />}/>
            <Route exact path='/categoria/:categoriaId' element = {<ItemListContaiener/>}/>
            <Route exact path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route exact path='/sobreNosotros' element={<SobreNosotros/>}/>
            <Route exact path='/contactanos' element={<Contactanos/>}/>
            <Route exact path='/createOrder' element={<CrearOrden/>}/>
            <Route exact path='/orderCompleted' element={<OrderCompleted/>}/>
          </Routes>
      </BrowserRouter>
    </ClickNavBarProvider>
    {/* footer */}
    </>
  )
}

export default App
