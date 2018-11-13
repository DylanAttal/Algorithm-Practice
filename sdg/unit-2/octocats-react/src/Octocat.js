import React, { Component } from 'react'
import Cat from './Cat'

class Octocat extends Component {
  constructor() {
    super()
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    fetch('https://sdg-octodex.herokuapp.com/')
      .then(response => response.json())
      .then(rawData => {
        let kitties = rawData.data.map(cat => {
          return (
            <Cat
              number={cat.number}
              image={cat.image}
              name={cat.name}
              authors={cat.authors}
            />
          )
        })
        this.setState({ cats: kitties })
        console.log(kitties)
      })
  }

  render() {
    return <main>{this.state.cats}</main>
  }
}

export default Octocat
