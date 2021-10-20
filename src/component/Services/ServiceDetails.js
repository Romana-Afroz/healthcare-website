import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const details = data.filter((td) => td.id == id);
  console.log(details);
  return (
    <div className="m-5 p-3 container m-auto mt-5 mb-5">
      <div className="card h-100 mx-auto" style={{ "max-width": "600px" }}>
        <div className="row g-0  ">
          <div className="col-md-4"></div>
          <Card.Img variant="top" src={details[0]?.img} />
          <Card.Body>
            <Card.Title>{details[0]?.name}</Card.Title>
            <Card.Text>{details[0]?.description}</Card.Text>
            <Button className="btn btn-primary w-50 col-sm-12">
              Appointment
            </Button>
          </Card.Body>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
