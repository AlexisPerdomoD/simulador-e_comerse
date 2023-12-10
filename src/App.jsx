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
import { useEffect } from 'react';
import { useGlobalContext} from './components/contextGLobal/ContextGlobal';



function App() {
  
  const { products} = useGlobalContext();
  
    return (
    <>
    <ClickNavBarProvider>
      <BrowserRouter>
        <Header/>
        {productos.isLoading ? <h2>cargando...</h2> : < Categorias productos={productos.data} />}
        <CartContainer />
          <Routes>
            <Route exact path='/' element ={products.isLoading ? <h2>cargando...</h2> : <ItemListContaiener />}/>
            <Route exact path='/categoria/:categoriaId' element = {productos.isLoading ? <h2>cargando...</h2> : <ItemListContaiener productosAMostrar={productos.data}/>}/>
            <Route exact path='/item/:itemId' element={productos.isLoading ? <h2>cargando...</h2> :<ItemDetailContainer productos={productos.data}/>}/>
            <Route exact path='/sobreNosotros' element={<SobreNosotros/>}/>
            <Route exact path='/contactanos' element={<Contactanos/>}/>
          </Routes>
      </BrowserRouter>
      
    </ClickNavBarProvider>
    </>
  )
}

export default App
