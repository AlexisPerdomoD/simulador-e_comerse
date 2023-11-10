import NavBar from "../navBar/NavBar"
import estilo from "./header.module.css"

export const Header = () => {
  return <>
  <header className={`${estilo.headerPrincipal} ${estilo.paletaColores}`}> 
       <div className='tituloPrincipal'>
          <h1>Tierra Fertil:Sabores Orgánicos de Ica <img src="/img/logoTest.svg" alt="logo" className={estilo.logoPrincipal} /></h1>
       </div>
        <NavBar />
  </header>
  </>
}