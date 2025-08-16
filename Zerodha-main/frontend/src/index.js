// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./index.css";

// // import App from "./App";
// // import reportWebVitals from "./reportWebVitals";
// import HomePage from "./landing_page/home/HomePage";

// import SignUp from "./landing_page/signup/SignUp"; 
// export default SignUp;
// import AboutPage from './landing_page/about/AboutPage';
// // export default AboutPage;
// import ProductPage from './landing_page/products/ProductPage';
// import PricingPage from './landing_page/pricing/PricingPage';
// import SupportPage from './landing_page/support/SupportPage';
// import Navbar from "./landing_page/Navbar";
// import Footer from "./landing_page/Footer";

// // import 'bootstrap/dist/css/bootstrap.min.css'; // If using Bootstrap
// // import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <Navbar/>
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/about" element={<AboutPage />} />
//       <Route path="/product" element={<ProductPage />} />
//       <Route path="/pricing" element={<PricingPage />} />
//       <Route path="/support" element={<SupportPage />} />
//     </Routes>
//     <Footer/>
//   </BrowserRouter>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();



import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing_page/home/HomePage";
import SignUp from "./landing_page/signup/SignUp";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage  from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

// import 'bootstrap/dist/css/bootstrap.min.css'; // If using Bootstrap
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} /> 
      {/* *: Becuase its like else condition */}
    </Routes>
    <Footer />
  </BrowserRouter>
);