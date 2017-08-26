import React, { Component } from 'react';
import Letter from './letter';

export class JumpingLetters extends Component {

  constructor(props) {
    super(props);
    this.string = props.phrase.split('');
  }

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

    return (
      <div>
        {
          this.string.map((letter, i) => {
            return (
              <Letter
                key={i}
                letter={letter}
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
