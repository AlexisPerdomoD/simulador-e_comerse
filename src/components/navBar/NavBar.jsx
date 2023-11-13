
import {CartWidget} from "../cartWidget/CartWidget";
import  BotonGenerico  from "../botonGenerico/BotonGenerico";
import "./NavBar.css"
import { useNavBarContext } from "../contextNavBar/ContextNavBar";
  const NavBar = () => { 
    const navContext = useNavBarContext();
  return <>
  <div className="navbarContainer">
    <nav className="navbar navbar-expand-lg align-self-end">  
      <div  id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          < BotonGenerico valor="inicio" texto="Inicio" funcionOModuloAEjecutar={()=>navContext.clickNavBarToggle(event.target.value)}/>
          </li>
          <li className="nav-item">
          < BotonGenerico valor="Categorias" texto="Mostrar Categorias" funcionOModuloAEjecutar={()=>navContext.clickNavBarToggle(event.target.value)}/>
          </li>
          <li className="nav-item">
          < BotonGenerico valor="sobreNosotros" texto="Sobre Nosotros" funcionOModuloAEjecutar={()=>navContext.clickNavBarToggle(event.target.value)}/>      
          </li>
          <li className="nav-item">
          < BotonGenerico valor="contactanos" texto="Contactanos" funcionOModuloAEjecutar={()=>navContext.clickNavBarToggle(event.target.value)}/>      
          </li>
        </ul>
      </div>
    </nav>
    <CartWidget />
  </div>
  </>
}

export default NavBar