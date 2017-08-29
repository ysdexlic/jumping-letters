import React, { Component } from 'react';
import Letter from './letter';

export class JumpingLetters extends Component {

  componentDidMount() {
    this.setInterval();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.speed !== this.props.speed) {
      this.clearInterval();
      this.setInterval(nextProps.speed);
    }
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  setInterval = (speed) => {
    const intervalSpeed = speed || this.props.speed;
    this.interval = setInterval(() => {
      this.setState({});
    }, intervalSpeed);
  }

  clearInterval = () => {
    clearInterval(this.interval);
  }

  render() {

    this.string = this.props.phrase.split('');

    return (
      <div>
        {
          this.string.map((letter, i) => {
            return (
              <Letter
                key={i}
                letter={letter}
                smooth={this.props.smooth}
                speed={this.props.speed}
                strength={this.props.strength}
              />
            );
          })
        }
      </div>
    );
  }

}

export default JumpingLetters;
