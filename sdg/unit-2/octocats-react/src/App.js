import React, { Component } from 'react'
import GitHubLogo from './octodex_logo.png'
import logo from './logo.svg'
import './App.css'
import Header from './Header'
import Cat from './Cat'
import Footer from './Footer'
import cats from './cats.json'
import Octodex from './Octodex'
import Octocat from './Octocat'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Octocat />
        <Footer />
      </div>
    )
  }
}

export default App
