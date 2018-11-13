import React, { Component } from 'react'
import Octocat from './Octocat'

class Cat extends Component {
  render() {
    return (
      <div class="shell">
        <div class="img-container">
          <div class="img-shell">
            <a>
              <img src={this.props.image} />
            </a>
          </div>
        </div>
        <div class="shell-footer">
          <p class="number">#{this.props.number}</p>
          <div class="author-info">
            <p class="author-by">
              <span>the </span>
              <span class="cat-name">{this.props.name} </span>
              <span>by </span>
            </p>
            {this.props.authors.map(author => (
              <a href={author.link}>
                <img src={author.image} />
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Cat
