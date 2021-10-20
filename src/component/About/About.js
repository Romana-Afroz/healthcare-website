import React from "react";
import img1 from "../../images/about.jpg";
 import img2 from "../../images/image2.jpg";
const About = () => {
  return (
    <div className="card mb-3 container mt-5 m-l">
      <div className="row g-0">
        <h1 className="mt-5">About Us</h1>
        <hr className="w-75 mx-auto" />
        <div className="col-md-4">
          <img src={img1} className="img-fluid mt-5 border rounded" alt="..." />
          <img src={img2} className="img-fluid mt-5 border rounded" alt="..." />
        </div>
        <div className="col-md-8 ">
          <div className="card-body text-center">
            <p>
              Mediex Healthcare Pvt Ltd
              was established in 06/05/2011 by visionary young entrepreneur Amit Dixit with clear vision of providing qualitative and affordable medicines to mass public in central India and creating a unique brand in medical industry which would be known for quality and commitment. This has come true as Today Company in central India has brand value which others have not been able to achieve even after long presence.

              Having corporate office in Pune, Mediex Healthcare has strong presence in Madhya Pradesh, Rajasthan, Maharastra, Chhatisgarh, U.P, Gujrat and west Bangal. Company has grown steadily from very first day of its existence. Growth of the company can also be seen through product range, relationship and Brand Value with Doctors and experienced management and field staff.

              Amit Dixit before starting the company has vast experience of 12 years in pharma industry. He has served in various positions in reputed pharma Companies. His experience and vision had very crucial role in success of the company.

              Turnover has grown with growth of the company in such competitive environment which is reflected in Audited Financials Company is having strong and experienced sales force and management team. Sales force includes 18 Managers and 125 Medical Representatives
            </p>
             <h3>Our Mission</h3>
             <p> To endeavor to satisfy our customers' needs in every manner possible: through excellent service, by developing and marketing an effective, safe, quality product and by offering our product at a price affordable to all patients.
To support a healthy & active lifestyle through our broad portfolio of Pharma, OTC & FMCG products.
To achieve excellence and leadership through the highest standards of quality across all functions of our organization.
To Ensures a safe and healthy environment for all personnel and maintain harmony with the natural environment.
To ensure the well being of the community by effectively fulfilling social responsibilities.
</p>
<h3>Our Vision</h3>
<p>“To remain as a successful company among the top 100 Pharmaceutical manufacturing Company of India by 2015 by offering wide range of quality formulation / products at competitive prices."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
