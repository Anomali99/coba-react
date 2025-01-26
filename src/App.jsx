import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Produk from "./Pages/Produk";
import AboutPage from './Pages/AboutPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<Produk />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
