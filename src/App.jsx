import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { CartProvider } from "./context/CartContext";

// Pages
import Home from "./Pages/Home";
import Medicines from "./Pages/Medicines";
import PersonalCare from "./Pages/PersonalCare";
import HealthConditions from "./Pages/HealthConditions";
import VitaminsSuppliments from "./Pages/VitaminsSuppliments";
import DiabeteseCare from "./Pages/DiabeteseCare";
import HealthCareDevices from "./Pages/HealthCareDevices";
import HomeopathicMedicine from "./Pages/HomeopathicMedicine";
import HealthGuide from "./Pages/HealthGuide";
import Cart from "./Pages/Cart";

function App() {
  return (
    <CartProvider>  {/* ✅ Wrap with provider */}
      <Router>
        {/* Navbar har page par */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/personal" element={<PersonalCare />} />
          <Route path="/healthconditions" element={<HealthConditions />} />
          <Route path="/vitaminssuppliments" element={<VitaminsSuppliments />} />
          <Route path="/diabetesecare" element={<DiabeteseCare />} />
          <Route path="/healthcaredevices" element={<HealthCareDevices />} />
          <Route path="/homeopathicmedicine" element={<HomeopathicMedicine />} />
          <Route path="/healthguide" element={<HealthGuide />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
