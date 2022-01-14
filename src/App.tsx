import Home from "./pages/home/Home";
import Leitura from "./pages/leitura/Leitura";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/leitura" element={<Leitura />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
