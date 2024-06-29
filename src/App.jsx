import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

// Components
import Navbar from "./Components/Navbar/Navbar";

// Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Products from "./Pages/Products/Products";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
// sub services
import LiabilityPublicInsurance from "./Pages/Products/LiabilityPublicInsurance/LiabilityPublicInsurance";
// sub products
import RiskManagement from "./Pages/Services/RiskManagement/RiskManagement";
// sub blogs
import Insurance from "./Pages/Blogs/Insurance/Insurance";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          {/* sub products */}
          <Route
            path="/products/LiabilityPublicInsurance"
            element={<LiabilityPublicInsurance></LiabilityPublicInsurance>}
          ></Route>
          {/* sub services */}
          <Route
            path="/services/RiskManagement"
            element={<RiskManagement></RiskManagement>}
          ></Route>
          {/* sub blogs */}
          <Route
            path="/blogs/insurance"
            element={<Insurance></Insurance>}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </I18nextProvider>
  );
}

export default App;
