import { Header } from './components/header/Header';
import {ClickNavBarProvider} from "./components/contextNavBar/ContextNavBar";
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import { CuerpoPrincipal } from './components/cuerpoPrincipal/CuerpoPrincipal';
import "./index.css"






function App() {
    
    return (
    <>
    <style>
          @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Poppins:wght@400;500;600&display=swap');
      </style>
      <div className='pancake-stack'>
        <ClickNavBarProvider>
        <BrowserRouter>
        {/* header */}
          <Header/>
        {/* main */}
          <CuerpoPrincipal />
      </BrowserRouter>
      </ClickNavBarProvider>
        {/* footer */}
        <Footer />
    </div>
        
    </>
  )
}

export default App
