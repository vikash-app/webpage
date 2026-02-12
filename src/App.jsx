import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import "./index.css";

// Lazy load less critical pages
const TravelDestinations = lazy(() => import("./pages/TravelDestinations"));
const DestinationDetail = lazy(() => import("./pages/DestinationDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <div className="min-h-screen bg-surface dark:bg-darkSurface transition-colors">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/travel-destinations" element={<TravelDestinations />} />
              <Route path="/travel-destinations/:id" element={<DestinationDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}