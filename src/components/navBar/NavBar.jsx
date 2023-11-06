
import {CartWidget} from "../cartWidget/CartWidget";
import  BotonGenerico  from "../botonGenerico/BotonGenerico";
import "./NavBar.css"
import "bootstrap"
  const NavBar = () => { 
  return <>
  <div className="navbarContainer">
    <nav className="navbar navbar-expand-lg align-self-end">  
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
          < BotonGenerico valor="inicio" texto="Inicio" />
          </li>
          <li className="nav-item">
          < BotonGenerico valor={"Categorias"} texto="Mostrar Categorias" />
          </li>
          <li className="nav-item">
          < BotonGenerico valor="sobreNosotros" texto="Sobre Nosotros" />      
          </li>
          <li className="nav-item">
          < BotonGenerico valor="contactanos" texto="Contactanos" />      
          </li>
        </ul>
      </div>
    </nav>
    <CartWidget />
  </div>
  </>
}

export default NavBar