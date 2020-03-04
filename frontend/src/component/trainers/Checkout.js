import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => (
  <section className="background">
    <div className="container container-err">
      <h1 className="header has-text-centered"> Checkout Under Refurbishment!</h1>
      <div className="checkout">
      <Link to={'/'}>
          <button className="button is-centered is-black is-medium is-rounded">HOME</button>
        </Link>
      </div>  


    </div> 

  </section>
)

export default Checkout