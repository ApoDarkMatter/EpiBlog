import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./styles.css";

const BlogAuthor = (props) => {
  const { firstName, lastName, avatar } = props;
  return (
    <Row>
      <Col xs={2}>
        <Image className="blog-author" src={avatar} roundedCircle />
      </Col>
      <Col>
        <div>by</div>
        <h6>{firstName} {lastName}</h6>
      </Col>
    </Row>
  );
};

export default BlogAuthor;
