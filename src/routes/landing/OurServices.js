import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import ourServices from '../../data/ourServices';



const OurServices = () => {
  return (
    <motion.article
      className="section-3-container"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <h2 className="pop-font">Our Services</h2>
      <p className="pop-font section-description">
      -<span style={{ color: 'goldenrod' }}>Haj & Umrah Services</span>-
      <br />
      Our unique matching system lets you find just the tour you want for your next holiday.
      </p>
      <p className="pop-font section-description">
      -<span style={{ color: 'goldenrod' }}>Visa Endorsement</span>-
      <br />
      We offer a wide variety of personally picked tours with destinations all over the globe.
      </p>
      <p className="pop-font section-description">
      -<span style={{ color: 'goldenrod' }}>
      Highly Qualified Service</span>-
      <br />
      Our tour managers are qualified, skilled, and friendly to bring you the best service.
      </p>
      <p className="pop-font section-description">
      -<span style={{ color: 'goldenrod' }}>24/7 Support</span>-
      <br />
      You can always get professional support from our staff 24/7 and ask any question you have.
      </p>
      <p className="pop-font section-description">
      -<span style={{ color: 'goldenrod' }}>Handpicked Hotels</span>-
      <br />
      Our team offers only the best selection of affordable and luxury hotels to our clients.
      </p>
      <p className="pop-font section-description">
      -<span style={{ color: 'goldenrod' }}>Best Price Guarantee</span>-
      <br />
      If you find tours that are cheaper than ours, we will compensate the difference.
      </p>
      <p className="pop-font section-description">
      -<span style={{ color: 'goldenrod' }}>Ticketing</span>-
      <br />
      You can always get professional support from our staff 24/7 and ask any question you have.
      </p>
      <p className="pop-font section-description">
      -<span style={{ color: 'goldenrod' }}>Ziyarah of Holy places</span>-
      <br />
      You can always get professional support from our staff 24/7 to visit holy places.
      </p>
      <section className="services-grid  flex-container flex-column">
        {ourServices.map((service) => (
          <Tilt key={service.id}>
            <section className="service-list flex-container flex-column">
              <img
                width="50"
                height="50"
                className="service-img"
                src={service.img}
                alt=""
                aria-hidden="true"
              />

              <section>
                <h3 className="pop-font">{service.name}</h3>
                <p>{service.description}</p>
              </section>
            </section>
          </Tilt>
        ))}
      </section>
    </motion.article>
  )
}

export default OurServices;