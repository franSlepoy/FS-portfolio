import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from "./components/common/navBar/NavBar"
import ArgentinaPrograma from "./components/pages/argentinaPrograma/ArgentinaPrograma"
import Contacto from "./components/pages/contacto/Contacto"
import DrayTek from "./components/pages/drayTek/DrayTek"
import Home from './components/pages/home/Home'
import ManuExpress from "./components/pages/manuexpress/ManuExpress"
import ManuReactWeb from "./components/pages/manuReactWeb/ManuReactWeb"
import Mascoters from "./components/pages/mascoters/Mascoters"
import RickAndMorty from "./components/pages/rickAndMorty/RickAndMorty"
import SobreMi from "./components/pages/sobreMi/SobreMi"
import Tyme from "./components/pages/tyme/Tyme"
import Umeni from "./components/pages/umeni/Umeni"
import ViajesEspaciales from "./components/pages/viajesEspaciales/ViajesEspaciales"
import FG from "./components/pages/f&g/FG"


function App() {


  return (
   <BrowserRouter>
   <NavBar/>
    <Routes>
      <Route path='/FS-portfolio/' element={<Home/>}/>
      <Route path='/FS-portfolio/manuelSiguenzaWeb' element={<ManuReactWeb/>}/>
      <Route path='/FS-portfolio/drayTeK' element={<DrayTek/>}/>
      <Route path='/FS-portfolio/mascoters' element={<Mascoters/>}/>
      <Route path='/FS-portfolio/tyme' element={<Tyme/>}/>
      <Route path='/FS-portfolio/f&g' element={<FG/>}/>
      <Route path='/FS-portfolio/viajesEspaciales' element={<ViajesEspaciales/>}/>
      <Route path='/FS-portfolio/rickAndMortyAppi' element={<RickAndMorty/>}/>
      <Route path='/FS-portfolio/argentinaPrograma' element={<ArgentinaPrograma/>}/>
      <Route path='/FS-portfolio/e-commerceArte' element={<ManuExpress/>}/>
      <Route path='/FS-portfolio/umeni' element={<Umeni/>}/>
       <Route path='/FS-portfolio/sobreMi' element={<SobreMi/>}/>
      {/* <Route path='/música' element={}/>  */}
      <Route path='/FS-portfolio/contacto' element={<Contacto/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
   
