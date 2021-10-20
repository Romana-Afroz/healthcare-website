import React from "react";
import { Card } from "react-bootstrap";

const Doctor = (props) => {
  const { img, name, expert } = props.doctor;
  return (
    <div className="col-md-4 p-2 container">
      <div className="card h-100" style={{ "max-width": "600px" }}>
        <div className="row g-0">
          <div className="col-md-4"></div>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{expert}</Card.Text>
          </Card.Body>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
