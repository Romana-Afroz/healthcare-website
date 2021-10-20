import React, { useEffect, useState } from "react";
import Doctor from "./Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("./doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="m-5 p-3 container m-auto mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <h1 className="">Meet Our Doctor's</h1>
            <span>
              <hr className="w-25 m-auto mb-2" />
            </span>
            {doctors.map((doctor) => (
              <Doctor key={doctor.id} doctor={doctor}></Doctor>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
