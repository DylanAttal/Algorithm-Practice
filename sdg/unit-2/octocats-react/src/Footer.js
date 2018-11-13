import React, { Component } from 'react'
import CatIcon from './CatIcon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class Footer extends Component {
  render() {
    return (
      <div class="footer-border">
        <div class="footer-left">
          <ul>
            <li>RSS</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div class="footer-center">
          <CatIcon />
        </div>
        <div class="footer-right">
          <p>&copy; 2013 - 2018 GitHub, Inc.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    )
  }
}

export default Footer
