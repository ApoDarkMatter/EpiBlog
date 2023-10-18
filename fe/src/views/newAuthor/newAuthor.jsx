import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import "./styles.css"

const NewAuthor = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bornDate, setBornDate] = useState();
  const [avatar, setAvatar] = useState("");

  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    bornDate: bornDate,
    avatar: avatar
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER_BASE_URL}/authors`,
            formData
            )
            console.log("Author created successfully", response.data)
    } catch (error) {
        console.log("Error on creation new author", error);
    }
  }

  return (
    <Container className="new-author-container">
      {/* setting the form encType */}
      <Form
        className="mt-5"
        onSubmit={handleSubmit}
        >
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            size="lg"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            size="lg"
            placeholder="First Name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            size="lg"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Born Date</Form.Label>
          <Form.Control
            size="lg"
            placeholder="BornDate"
            value={bornDate}
            onChange={(e) => setBornDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Avatar</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Avatar"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{
              marginLeft: "1em",
            }}
          >
            Add
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewAuthor;