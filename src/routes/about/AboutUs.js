import React from 'react'
//images
import SlideOne from '../../assets/images/img-one.jpeg'
import SlideTwo from '../../assets/images/carbonara.jpeg'
import SlideThree from '../../assets/images/img-three.jpeg'
import SlideFour from '../../assets/images/img-four.jpeg'


const AboutUs = () => {
  return (
    <article className="about-us">
      <section className="content">
        <h2>About us</h2>
        <h3 className='sub-title'>More than a travel agency.</h3>
        <p>
        At Syedi Hospitality, we believe that every journey is a story waiting to be told. As a passionate travel agency, we are dedicated to curating exceptional and unforgettable experiences for our clients. Whether you dream of exploring exotic destinations, embarking on cultural adventures, or simply relaxing in luxurious getaways, Syedi Hospitality is here to turn your travel aspirations into reality. Our commitment to personalized service, attention to detail, and a deep love for travel ensures that each journey with us is a seamless blend of comfort, exploration, and discovery. Trust us to be your guide in creating moments that last a lifetime..
        </p>
        <div className="section-one-glass"></div>
      </section>
      <section className="images">
        <img src={SlideOne} alt="" aria-hidden="true" />
        <img src={SlideTwo} alt="" aria-hidden="true" />
        <img src={SlideThree} alt="" aria-hidden="true" />
        <img src={SlideFour} alt="" aria-hidden="true" />
      </section>
    </article>
  )
}

export default AboutUs;