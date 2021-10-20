import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="m-5 p-3 container m-auto mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <h1 className="">Our Hospital Services</h1>
            <span>
              <hr className="w-25 m-auto mb-2" />
            </span>
            {services.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
