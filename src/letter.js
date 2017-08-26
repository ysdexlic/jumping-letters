import React, { Component } from 'react';
import { randomizer } from './randomizer';

export class Letter extends Component {

  render() {

    const letterStyle = {
      display: 'inline-block',
      position: 'relative',
      top: randomizer(this.props.strength) + 'px',
      left: randomizer(this.props.strength) + 'px'
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
