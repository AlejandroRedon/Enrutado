import { Route, Routes } from "react-router-dom"
import ContenedorRouting from "./paginas/ContenedorRouting";
import About from "./paginas/About";
import Info from "./paginas/Info";
import Home from "./paginas/Home";
import Error from "./paginas/Error";
import Juegos from "./paginas/Juegos";
import JuegosCaracteristicas from "./paginas/JuegosCaracteristicas";

function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/"element={<ContenedorRouting />}/> 
             <Route path="about" element={<About />}/>    
             <Route path="info" element={<Info />}/> 
             <Route path="juegos" element={<Juegos />}>
                  <Route path=":id" element={<JuegosCaracteristicas />}/>
                </Route>     
             <Route path="/" element={<Home />}/> 
             <Route path="*" element={<Error />}/> 
          </Route>
      </Routes>
  
    </div>
  );
}

export default App;
