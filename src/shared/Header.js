import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import siteLogo from "../assets/images/siteLogo.png"
import { useLocation } from "react-router-dom" 

function Header() { 
    const location = useLocation()
    const {pathname} = location
    console.log("Location: ", location)

    return (
                   <Navbar expand="lg" className="sticky-top w-100 m-0 p-0 navbar-slide-nav navbar-fixed-top">
                                <Container  className="p-0">
                                            <Navbar.Brand href="/" className="">
                                                <Image src={siteLogo} thumbnail className="img border-0 bg-transparent"/>
                                            </Navbar.Brand>
                                       
                                            <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white navbar-slide-nav mr-3" />
                                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end mr-2">
                                                <Nav defaultActiveKey={pathname} className="" variant="pills">
                                                    <Nav.Link href="/" className="mx-1">Home</Nav.Link>
                                                    <Nav.Link href="/other-services" className="mx-1">Other Services</Nav.Link>
                                                    <Nav.Link href="/contact1" className="mx-1">Contact Us</Nav.Link>
                                                </Nav>
                                            </Navbar.Collapse>
                                </Container>
                </Navbar>

    )
}


export default Header
