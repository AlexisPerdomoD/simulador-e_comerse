import { CartContainer } from "../cartContainer/CartContainer"
import { Categorias } from "../categorias/Categorias"
import NavBar from "../navBar/NavBar"
import  "./header.css"

export const Header = () => {
  return <>
  <header className="header"> 
       <div className='tittle__principal'>
          <h1>Tierra Fertil:Sabores Orgánicos de Ica <img src="/img/logoTest.svg" alt="logo" className="logo__principal" /></h1>
       </div>
        <NavBar />
        <Categorias />
        <CartContainer />
  </header>
  </>
}