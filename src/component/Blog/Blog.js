import React from "react";
import { Button, Card } from "react-bootstrap";

const Blog = (props) => {
  const { img, name } = props.blog;
  return (
    <div className="col-md-4 p-2 container">
      <div className="card h-100" style={{ "max-width": "600px" }}>
        <div className="row g-0">
          <div className="col-md-4"></div>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </div>
      </div>
    </div>
  );
};

export default Blog;
