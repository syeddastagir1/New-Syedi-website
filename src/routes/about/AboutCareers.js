import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-2.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCareers = () => {
  return (
    <article className="about-careers">
      <section className="content">
        <h2 className="sub-title">Careers</h2>
        <h3>Join the team</h3>
        <p>
        Are you passionate about crafting exceptional travel experiences, providing outstanding customer service, and being part of a vibrant and dynamic team? If so, Syedi Hospitality welcomes you to join our family!
        We are continuously searching for talented and motivated individuals to become integral members of our team, offering diverse roles ranging from travel consultants and hospitality experts to administrative staff and management. Whether you're beginning your journey in the travel industry or bringing years of experience, our supportive and collaborative work environment fosters personal and professional growth, making Syedi Hospitality an exciting place to thrive.
        </p>
        <Link to="/careers" onClick={ResetLocation} className="active-button-style">Join now</Link>
      </section>
      <img src={OfficeTwo} alt="" aria-hidden="true" />
    </article>
  );
}
export default AboutCareers;
