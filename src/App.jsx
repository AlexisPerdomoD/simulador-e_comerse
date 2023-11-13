import { Header } from './components/header/Header';
import { CuerpoPrincipal } from './components/cuerpoPrincipal/CuerpoPrincipal';
import {ClickNavBarProvider} from "./components/contextNavBar/ContextNavBar";


function App() {
    return (
    <>
    <ClickNavBarProvider>
      <Header/>
      <CuerpoPrincipal/>
    </ClickNavBarProvider>
    </>
  )
}

export default App
