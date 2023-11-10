import ItemListContaiener from "../itemListContainer/ItemListContainer"
import productos from "/estudios/reactCoderHouse/proyecto/e-comerse-vite/src/info.json"

export const CuerpoPrincipal = () => {
  return <>
    <main>
        <ItemListContaiener greeting={"hola bienvenido mundo"} productosAMostrar={productos["Frutas frescas"]}/>
    </main>
  </>
}