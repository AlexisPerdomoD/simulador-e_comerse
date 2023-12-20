import { Header } from './components/header/Header';
import {ClickNavBarProvider} from "./components/contextNavBar/ContextNavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContaiener from './components/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { SobreNosotros } from './components/sobreNosotros/SobreNosotros';
import { Contactanos } from './components/contactanos/Contactanos';
import CrearOrden from './components/crearOrden/CrearOrden';
import OrderCompleted from './components/crearOrden/orderCompleted';
import Footer from './components/footer/Footer';
import { CuerpoPrincipal } from './components/cuerpoPrincipal/CuerpoPrincipal';




function App() {
    
    return (
    <>
    <style>
          @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Poppins:wght@400;500;600&display=swap');
      </style>
      <div className='pancake-stack'>
        <ClickNavBarProvider>
        <BrowserRouter>
        {/* header */}
          <Header/>
        {/* main */}
          <CuerpoPrincipal />
      </BrowserRouter>
      </ClickNavBarProvider>
        {/* footer */}
        <Footer />
    </div>
        
    </>
  )
}

export default App
