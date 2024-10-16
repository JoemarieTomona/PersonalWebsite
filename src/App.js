// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SubmissionSuccess from './components/SubmissionSuccess';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import './App.css'; // Custom CSS for modern styling

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg" className="navbar-modern">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand">
            My Profile
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<SubmissionSuccess />} />
        </Routes>
      </Container>

      <footer className="footer mt-auto py-3">
        <Container>
          <Row>
            <Col className="text-center">
              © 2024 My Personal Website. All Rights Reserved.
            </Col>
          </Row>
        </Container>
      </footer>
    </Router>
  );
}

export default App;
