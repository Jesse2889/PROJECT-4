import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <section className="hero is-fullheight-with-navbar is-black">
    <div className="hero-body">
      <div className="container">
        <p className="main-title"> </p>
        <Link to={'/trainers'}>
          <button className="button is-black is-medium is-rounded">BROWSE FOOTWEAR</button>
        </Link>
      </div>
    </div>
  </section>
)
export default Home