import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./componets/Main/Main";
import Header from "./componets/Header/Header";
import Retro_effect from "./componets/Retro_effect/Retro_effect";
import Retro_vision from "./componets/Retro_effect/Retro_vision";
//import Loading_video from "./componets/Loding_video/Loding_video";

function App() {

  return (
    <>
    <BrowserRouter>
      <Retro_effect />
      <Retro_vision />
      <div  className="sub-body">
      <Header />
      <Routes>
        <Route path="/" element={ <main><Main /></main> }/>
        <Route path="*" element={ <main><center><h3>404: Página no encontrada</h3></center></main>}/>
      </Routes>

      </div>
    </BrowserRouter>
    </>
  )
}

export default App
