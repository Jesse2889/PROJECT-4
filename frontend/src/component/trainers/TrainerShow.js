import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Magnifier from 'react-magnifier'



class TrainerShow extends React.Component {
  state = {
    trainer: {}
  }

  async componentDidMount() {
    const trainerId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/trainers/${trainerId}`)
      this.setState({ trainer: res.data })
    } catch (err) {
      this.props.history.push('/error')
    }
  }

  render() {

    return (
      <>
        <section className="section">
          <div className="container">
            <div className="columns is-mobile is-multiline">
              {this.state.trainer &&
                <>
                  <div className="main-title-wrapper">
                    <h1 className="title car-header">{this.state.trainer.name}</h1>
                  </div>
                  <div className="columns">
                    <div className="column is-half">
                      <figure className="image">
                        <Magnifier img src={this.state.trainer.image} alt={this.state.trainer.name}  />
                      </figure>
                    </div>
                    <div className="column is-half card-text">
                      <h4 className="title is-4">Price</h4>

                      <p >{this.state.trainer.price}</p>


                      <h4 className="title is-4">Description</h4>
                      <p>{this.state.trainer.description}</p>
                      <hr />
                      <Link to={'/trainers'}>
                        <button className="button is-black is-medium is-rounded">Back</button>
                      </Link>
                      <hr />
                      <Link to={'/checkout'}>
                        <button className="button is-black is-medium is-rounded">Buy</button>
                      </Link>
                    </div>
                  </div>
                </>
              }
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default TrainerShow