import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./paginas/Layout";
import Inicio from "./paginas/Inicio";
import Blogs from "./paginas/Blogs";
import Contacto from "./paginas/Contacto";
import NoPagina from "./paginas/NoPagina";
import Quienes from "./paginas/Quienes";
import './styles.css'; 


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="Quienes" element={<Quienes />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NoPagina />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
