import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-1.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCollaboration = () => {
  return (
    <article className="about-collaboration">
      <img src={OfficeTwo} alt="" aria-hidden="true" />
      <section className="content">
        <h2 className="sub-title">Collaboration</h2>
        <h3>Join the business</h3>
        <p>
        From curating immersive travel experiences to meeting the distinctive needs of businesses in our region, Syedi Hospitality is dedicated to excellence. Whether it's organizing corporate retreats, facilitating business conferences, or providing delightful meals for employees, we tailor our services to exceed the unique requirements of our corporate clients. Our versatile menu showcases a variety of options, ensuring a culinary experience that caters to every palate. Syedi Hospitality, your trusted partner in creating memorable moments.
        </p>
        <Link to="/contact" onClick={ResetLocation} className="active-button-style">Request a call</Link>
      </section>
    </article>
  );
}

export default AboutCollaboration;
