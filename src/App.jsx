import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import TravelDestinations from "./pages/TravelDestinations";
import DestinationDetail from "./pages/DestinationDetail";
import TravelStories from "./pages/TravelStories";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-surface dark:bg-darkSurface transition-colors">
        <div className="bg-red-500 text-white p-8 text-4xl">TAILWIND TEST</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/travel-destinations" element={<TravelDestinations />} />
          <Route path="/travel-destinations/:id" element={<DestinationDetail />} />
          <Route path="/travel-stories" element={<TravelStories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}