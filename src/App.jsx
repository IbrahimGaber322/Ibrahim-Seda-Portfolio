import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Container from "react-bootstrap/Container";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
function App() {
  return (
    <Container className="my-background" fluid>
      <MyNavbar />
      <Home />
    </Container>
  );
}

export default App;
