import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Form className="border rounded-5 m-auto mt-5 container mb-5 w-100">
      <h1 className="mt-2">Contact Us</h1>
      <hr className="m-auto mb-5" />
      <Row className="">
        <Form.Group
          as={Col}
          controlId="formGridEmail"
          className="col-sm-12 col-lg-6 mx-auto mb-2"
        >
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>

      <Form.Group
        className="mb-3"
        controlId="formGridAddress1"
        className="col-sm-12 col-lg-6 mx-auto mb-2"
      >
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formGridAddress2"
        className="col-sm-12 col-lg-6 mx-auto mb-2"
      >
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Form.Group
        as={Col}
        controlId="formGridCity"
        className="col-sm-12 col-lg-6 mx-auto mb-2"
      >
        <Form.Control placeholder="City" />
      </Form.Group>

      <Form.Group
        as={Col}
        controlId="formGridState"
        className="col-sm-12 col-lg-6 mx-auto mb-2"
      >
        <Form.Select defaultValue="Choose...">
          <option selected>Cox's Bazar</option>
          <option>Dhaka</option>
          <option>Chottogram</option>
        </Form.Select>
      </Form.Group>

      <Form.Group
        as={Col}
        controlId="formGridZip"
        className="col-sm-12 col-lg-6 mx-auto mb-5 mb-2"
      >
        <Form.Control placeholder="Zip Code" />
      </Form.Group>

      <Button
        variant=""
        className="mb-5 w-50 fs-5 btn btn-outline-primary text-uppercase"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default Contact;
