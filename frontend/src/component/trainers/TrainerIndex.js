import React from 'react'
import axios from 'axios'
import TrainerCard from './TrainerCard'


class TrainerIndex extends React.Component {
  state = {
    trainers: [] ,
    showtrainers: []
  }
  async componentDidMount() {
    try {
      const res = await axios.get('/api/trainers')
      this.setState({ trainers: res.data })
    } catch (err) {
      console.log(err)
      this.props.history.push('/error')
    }
  }
  render() {
    if (!this.state.trainers.length) return null
    console.log(this.state.trainers)
    return (

      
      <section className="section">

        <div className="container">
        <h1>Jeepers Sneakers </h1>
          <div className="columns is-mobile is-multiline">
            {this.state.trainers.map(trainer =>( 
              <TrainerCard key={trainer.id} {...trainer}/>
            ))}
          </div>
        </div>
      </section>
    )
  }

}

export default TrainerIndex