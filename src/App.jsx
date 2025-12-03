import React from "react";
import Top from "./components/Top";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Black from "./components/Black";
import Famous from "./components/Famous";
import Lavka from "./components/Lavka";

import Karusel from "./components/Karusel";
import Service from "./components/Service";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Top />
      <Header />
      <Navbar />
      <Karusel />
      <Black />
      <Famous />
      <Service />
      <Lavka />
      <Footer />
    </div>
  );
}

export default App;
