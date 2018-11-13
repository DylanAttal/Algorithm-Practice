import React, { Component } from 'react'
import cats from './cats.json'
import Cat from './Cat'

class Octodex extends Component {
  render() {
    return (
      <main>
        {cats.map(cat => (
          <Cat
            number={cat.number}
            image={cat.image}
            name={cat.name}
            authorImage={cat.authorImage}
          />
        ))}
      </main>
    )
  }
}

export default Octodex
