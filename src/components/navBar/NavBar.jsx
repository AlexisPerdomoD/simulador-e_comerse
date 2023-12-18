
import {CartWidget} from "../cartWidget/CartWidget";
import  BotonGenerico  from "../botonGenerico/BotonGenerico";
import { useNavBarContext } from "../contextNavBar/ContextNavBar";
import { Link } from "react-router-dom";
import "./NavBar.css"
  const NavBar = () => { 
    const navContext = useNavBarContext();
  return <>
  <div className="navbarContainer">
    <nav className="navbar navbar-expand-lg align-self-end">  
      <div  id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <Link to={"/"}>
            < BotonGenerico valor="inicio" texto="Inicio" funcionOModuloAEjecutar={()=>navContext.clickNavBarToggle(event.target.value)}/>
            </Link>
          </li>
          <li className="nav-item">
              < BotonGenerico valor="categorias" texto="Mostrar Categorias" funcionOModuloAEjecutar={()=>navContext.clickNavBarToggle(event.target.value)}/>
          </li>

          <li className="nav-item">
            <Link to="/sobreNosotros">
              < BotonGenerico valor="sobreNosotros" texto="Sobre Nosotros" funcionOModuloAEjecutar={()=>navContext.clickNavBarToggle(event.target.value)}/>      
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to="/contactanos">
              < BotonGenerico valor="contactanos" texto="Contactanos" funcionOModuloAEjecutar={()=>navContext.clickNavBarToggle(event.target.value)}/>      
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <CartWidget/>
  </div>
  </>
}

export default NavBar