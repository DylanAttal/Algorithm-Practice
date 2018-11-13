import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class CatIcon extends Component {
  render() {
    return (
      <div class="main">
        <FontAwesomeIcon icon="stroopwafel" />
      </div>
    )
  }
}

export default CatIcon
