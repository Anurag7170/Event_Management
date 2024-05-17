import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/css/tailwind.css";
import "./assets/css/materialdesignicons.min.css";
import IndexTwo from "./pages/index/index-two";
import TourDetailOne from "./pages/listing/tour-detail/tour-detail-one";
import Aboutus from "./pages/aboutus";
import HelpcenterGuides from "./pages/helpcenter/helpcenter-guides";
import Error from "./pages/special/404";
import Contact from "./pages/contact";
import Booking from "./pages/Booking/booking";
import ThankYou from "./pages/special/ThankYou";

function App() {
  return (
    <Routes>
      <Route path="/booking" element={<Booking />} />
      <Route path="/" element={<IndexTwo />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/tour-detail-one" element={<TourDetailOne />} />
      <Route path="/tour-detail-one/:id" element={<TourDetailOne />} />
      <Route path="/allevent" element={<HelpcenterGuides />} />
      <Route path="/404" element={<Error />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  );
}

export default App;
