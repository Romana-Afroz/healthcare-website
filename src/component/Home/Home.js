import React from "react";
import Blogs from "../Blog/Blogs";
import Doctors from "../Doctors/Doctors";
import NewsLetter from "../NewsLetter/NewsLetter";
import Services from "../Services/Services";
import Banner from "../Shared/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Doctors></Doctors>
      <Blogs></Blogs>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
