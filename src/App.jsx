import { Header } from './components/header/Header';
import {ClickNavBarProvider} from "./components/contextNavBar/ContextNavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useFetch } from './assets/useFetch';
import { Categorias } from './components/categorias/Categorias';
import ItemListContaiener from './components/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { SobreNosotros } from './components/sobreNosotros/SobreNosotros';
import { Contactanos } from './components/contactanos/Contactanos';
import { CartContainer } from './components/cartContainer/CartContainer';
import { useGlobalContext} from './components/contextGLobal/ContextGlobal';



function App() {
  const productos = useFetch("../src/info.json")
  
  
    return (
    <>
    <ClickNavBarProvider>
      <BrowserRouter>
        <Header/>
         < Categorias productos={productos.data} />
        <CartContainer />
          <Routes>
            <Route exact path='/' element ={ <ItemListContaiener />}/>
            <Route exact path='/categoria/:categoriaId' element = {<ItemListContaiener />}/>
            <Route exact path='/item/:itemId' element={<ItemDetailContainer productos={productos.data}/>}/>
            <Route exact path='/sobreNosotros' element={<SobreNosotros/>}/>
            <Route exact path='/contactanos' element={<Contactanos/>}/>
          </Routes>
      </BrowserRouter>
      
    </ClickNavBarProvider>
    </>
  )
}

export default App
