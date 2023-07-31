// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import History from "./components/History";
import TypesOfFoods from "./components/TypesOfFoods";
import Menu from "./components/Menu";
import TestimonialsSlider from "./components/TestimonialsSlider"; // Yeni eklediğimiz testimonials slider bileşeni
import ContactForm from "./components/ContactForm"; // Yeni eklediğimiz contact form bileşeni

const App = () => {
  return (
    <Router>
      <Navbar />
      <Banner />
      <div className="container mt-5">
        <Routes>
          <Route path="/history" element={<History />} />
          <Route path="/types" element={<TypesOfFoods />} />
          <Route path="/menu" element={<Menu />} />
          {/* Yeni testimonials sayfası */}
          <Route path="/testimonials" element={<TestimonialsSlider />} />
          {/* Yeni contact form sayfası */}
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
