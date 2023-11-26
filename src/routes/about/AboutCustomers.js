import React from "react";
//images
import ImgOne from "../../assets/images/about-us/img-1.jpeg";
import ImgTwo from "../../assets/images/about-us/img-2.jpeg";
import ImgThree from "../../assets/images/about-us/img-3.jpeg";

const AboutCustomers = () => {
  return (
    <article className="about-customers">
      <div className="images">
        <img src={ImgOne} alt="" aria-hidden="true" />
        <img src={ImgTwo} alt="" aria-hidden="true" />
        <img src={ImgThree} alt="" aria-hidden="true" />
      </div>
      <section className="content">
        <h2 className="sub-title">Happy Customers</h2>
        <h3>many positive feedback</h3>
        <p>
        At Syedi Hospitality, our success is rooted in our unwavering commitment to providing unparalleled travel experiences. Our curated offerings encompass a diverse range of destinations, each promising unique and enriching adventures. From serene retreats to culturally vibrant expeditions, our travel selections are meticulously crafted to fulfill every wanderlust-filled desire. Recognizing that the essence of a remarkable journey goes beyond the location, we prioritize personalized service. Our devoted team is dedicated to cultivating a warm, inviting ambiance, ensuring that every traveler feels embraced as a cherished member of our global exploration family.
        </p>
      </section>
      <div className="img-glass"></div>
    </article>
  );
}


export default AboutCustomers;