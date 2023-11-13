import { useState } from "react";
import { Categorias } from "../categorias/Categorias";
import { useNavBarContext } from "../contextNavBar/ContextNavBar"
import ItemListContaiener from "../itemListContainer/ItemListContainer"
import { esperarApi } from "../../assets/esperarApi";

export const CuerpoPrincipal = () => {
  const productos = esperarApi('/src/info.json');
  const navContext = useNavBarContext()

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null)

  function categoriaToggle(valorBoton) {
    setCategoriaSeleccionada(valorBoton)
  }
  return <>
    <main>
      {navContext.valorClickNavBar === "Categorias" && <Categorias categoriaToggle={categoriaToggle}/>}
      {categoriaSeleccionada !== null && <ItemListContaiener greeting={categoriaSeleccionada} productosAMostrar={productos[categoriaSeleccionada]} />}
    </main>
  </>
}