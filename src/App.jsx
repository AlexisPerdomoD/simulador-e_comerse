import { Header } from './components/header/Header';
import {ClickNavBarProvider} from "./components/contextNavBar/ContextNavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useFetch } from './assets/useFetch';
import { Categorias } from './components/categorias/Categorias';
import ItemListContaiener from './components/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { destructurador } from './assets/destructurador';
import { SobreNosotros } from './components/sobreNosotros/SobreNosotros';
import { Contactanos } from './components/contactanos/Contactanos';


function App() {
  const productos = useFetch("../src/info.json")

    return (
    <>
    <ClickNavBarProvider>
      <BrowserRouter>
        <Header/>
        {productos.isLoading ? <h2>cargando...</h2> : < Categorias productos={productos.data} />}
          <Routes>
            <Route exact path='/' element ={productos.isLoading ? <h2>cargando...</h2> : <ItemListContaiener todoElCatalogo={destructurador(productos.data)}/>}/>
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
