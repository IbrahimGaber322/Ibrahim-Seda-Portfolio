import React from "react";
import Container from "react-bootstrap/Container";
import MyNavbar from "../components/Navbar";

function Home(){
    return (
        <Container id="home" className="my-home-page " fluid>
         <MyNavbar />
        </Container>
    );
}

export default Home;