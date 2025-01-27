import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Name from "./pages/Name";
import Contact from "./pages/Contact";
import About from "./pages/About"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/name" element={<Name />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
