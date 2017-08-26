import React, { Component } from 'react';
import Letter from './letter';

export class JumpingLetters extends Component {

  constructor(props) {
    super(props);
    this.string = props.phrase.split('');
    this.speed = this.props.speed || 120;
    this.strength = this.props.strength || 2;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({});
    }, this.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        {
          this.string.map((letter, i) => {
            return (
              <Letter
                key={i}
                letter={letter}
                strength={this.strength}
              />
            );
          })
        }
      </div>
    );
  }

}

export default JumpingLetters;
