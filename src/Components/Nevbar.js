import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function relate() {
  return (
    <Navbar >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Route path='/About' element={<About />} />
          <Route path='/Movielist' element={<Movielist />} />
          <Route path='/Moviecard/:id' element={<Moviecard />} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default relate