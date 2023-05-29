import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Navbar } from "./pages/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Router specifies where we want to use the react router. 
          All of router components should be wrapped inside this component */}
        <Navbar />
        {/* Navbar should be inside Router(or BrowserRouter) since we are using Link component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
