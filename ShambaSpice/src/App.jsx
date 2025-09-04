import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import HealthyFoods from "./pages/HealthyFoods";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        
        {/* Navbar stays fixed at the top */}
        <Navbar />

        {/* Main content grows and pushes footer down */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/healthyfoods" element={<HealthyFoods />} />
          </Routes>
        </main>

        {/* Footer always at the bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
