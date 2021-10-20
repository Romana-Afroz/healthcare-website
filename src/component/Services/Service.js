import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { id, img, name, description } = props.service;
  return (
    <div className="col-md-4 p-2 container">
      <div className="card h-100" style={{ "max-width": "600px" }}>
        <div className="row g-0">
          <div className="col-md-4"></div>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description.slice(0, 50)}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to={`/serviceDetails/${id}`}>
              <button className="btn btn-dark">SEE DETAILS</button>
            </Link>
          </Card.Footer>
        </div>
      </div>
    </div>
  );
};

export default Service;
