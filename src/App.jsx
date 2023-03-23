import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
    <Navbar />
     <Home />
    </div>
  );
}

export default App;
