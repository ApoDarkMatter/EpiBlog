import React, { useEffect } from "react";
import { Button, Container, Navbar, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import { setSearchData, setSearchVisible } from "../../reducers/blogPost";
import { useDispatch, useSelector } from "react-redux";



const NavBar = (props) => {
  const searchVisible = useSelector((state) => state.post.searchVisible)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(setSearchData(e.target.value))
  }

  if(searchVisible) {
    return (
      <Navbar expand="lg" className="blog-navbar" fixed="top">
        <Container className="justify-content-between">
          <Navbar.Brand as={Link} to="/home">
            <img className="blog-navbar-brand" alt="logo" src="logo.svg" />
          </Navbar.Brand>
          <Form.Control size="lg" type="text" placeholder="Search" onChange={handleChange}/>
          <Button
            as={Link}
            to="/new"
            className="blog-navbar-add-button bg-dark"
            size="lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
            </svg>
            Post Article
          </Button>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar expand="lg" className="blog-navbar" fixed="top">
        <Container className="justify-content-between">
          <Navbar.Brand as={Link} to="/home">
            <img className="blog-navbar-brand" alt="logo" src="logo.svg" />
          </Navbar.Brand>
          <Button
            as={Link}
            to="/new"
            className="blog-navbar-add-button bg-dark"
            size="lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
            </svg>
            Post Article
          </Button>
        </Container>
      </Navbar>
    );
  }
  
};

export default NavBar;
