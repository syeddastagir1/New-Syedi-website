import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import ResetLocation from '../../helpers/ResetLocation'
import pizzaMenuPreview from '../../data/pizzaMenuPreview';



const PizzaMenuPreview = () => {
  return (
    <article className="section-4 flex-container flex-column"  style={{marginTop : 80}}>
      <section className="section-4-info txt-center">
          <h2 className="pop-font txt-white">Hot Deals on visa's</h2>
          <p className="section-description">
          Are you ready to embark on your next adventure? Imagine a world where travel dreams become reality, where borders open up to exploration, and where cultural immersion awaits. At [SYEDI HOSPITALITY], we're delighted to present you with our exclusive "Hot Deals on Visas," your gateway to the world.
          </p>
      </section>
      <section className="meals-grid flex-container flex-column" >
        {pizzaMenuPreview.map((pizza, id) => (
          <motion.div
            key={id}
            className="meal-item flex-container"
            initial={{ opacity: 0, translateX: -300 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: -300 }}
            transition={{ duration: 3 }}
          >
            <img
              src={pizza.img375}
              srcSet={`${pizza.img1440} 300w, ${pizza.img700} 450w, ${pizza.img375} 375w`}
              sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
              alt={pizza.name}
            />
            <section className="meal-item-details flex-container flex-column">
              <h3 className="txt-white">{pizza.name}</h3>
              <p>{pizza.description}</p>
              <section className="meal-item-order flex-container flex-row txt-center">
                <p>
                  <span>{pizza.currency}</span>
                  {pizza.price}
                </p>
              </section>
            </section>
          </motion.div>
        ))}
      </section>
      <Link
        onClick={ResetLocation}
        to="/menu"
        className="active-button-style txt-white"
      >
        Load More
      </Link>
    </article>

  )
}

export default PizzaMenuPreview;