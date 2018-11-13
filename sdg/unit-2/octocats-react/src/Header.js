import React, { Component } from 'react'
import GitHubLogo from './octodex_logo.png'

class Header extends Component {
  render() {
    return (
      <div class="holder">
        <img src={GitHubLogo} />
        <ul class="top-nav">
          <li>RSS</li>
          <li>FAQ</li>
          <li>Back to GitHub</li>
        </ul>
      </div>
    )
  }
}

export default Header
