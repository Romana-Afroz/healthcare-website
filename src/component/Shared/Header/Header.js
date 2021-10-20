import React from "react";
import "./Header.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="info"
      variant="dark"
      className="fw-bolder fs-6"
    >
      <Container>
        <Nav.Link as={Link} to="/home">
          <span className="brand-name"> Mediex</span>
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto p-3 fs-6">
            <Nav.Link  as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link  as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link  as={Link} to="/services">
              Service
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link  as={Link} to="/doctors">
              Doctors
            </Nav.Link>
            <Nav.Link  as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Form className="d-flex mb-2">
              <FormControl
                type="search"
                placeholder="Search"
                className="ms-2"
                aria-label="Search"
              />
              <Button variant="info" className="ms-2">
                SEARCH
              </Button>
            </Form>
          </Nav>
          <Nav>
            {!user.email && (
              <Link
                to="/register"
                className="register btn btn-primary text-white mb-2 ms-2"
              >
                REGISTER
              </Link>
            )}
            {user.email ? (
              <button onClick={logOut} className="btn btn-danger text-white">
                LOGOUT
              </button>
            ) : (
              <Link
                to="/login"
                className="login btn btn-primary text-white mb-2 ms-2"
              >
                LOGIN
              </Link>
            )}
            <span className="text-white mt-2 ms-2">{user.email}</span>
            {user.photoURL && (
              <img className="photoURL mx-auto" src={user?.photoURL} alt="" />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
