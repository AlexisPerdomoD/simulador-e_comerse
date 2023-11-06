import React, { useState, useEffect } from 'react';
import NavBar from "./components/navBar/NavBar"
import estilo from './App.module.css'
import productos from "./info.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContaiener from './components/itemListContainer/ItemListContainer';


function App() {
    return (
    <>
    
      <header className={`${estilo.headerPrincipal} ${estilo.paletaColores}`}> {/* futuro componente */}
       <div className='tituloPrincipal'>
          <h1>Tierra Fertil:Sabores Orgánicos de Ica <img src="/img/logoTest.svg" alt="logo" className={estilo.logoPrincipal} /></h1>
          
       </div>
        <hr/>
        <NavBar />
      </header>
        <ItemListContaiener greeting={"hola bienvenido mundo"} productosAMostrar={productos['Hierbas Aromáticas']}/>
    </>
  )
}

export default App
