import React, { Component } from 'react';
import { randomizer } from './randomizer';

export class Letter extends Component {

  render() {
    const letterStyle = {
      display: 'inline-block',
      position: 'relative',
      top: randomizer(this.props.strength) + 'px',
      left: randomizer(this.props.strength) + 'px',
      transition: this.props.smooth
        ? `left ${this.props.speed/1000}s, top ${this.props.speed/1000}s`
        : 'none'
    };

    if (this.props.letter === ' ') {
      return (
        <div style={letterStyle}>
          &nbsp;
        </div>
      );
    }

    if (this.props.letter === '\\') {
      return (
        <br />
      );
    }

    return (
      <div style={letterStyle}>
        {this.props.letter}
      </div>
    );
  }
}

export default Letter;
