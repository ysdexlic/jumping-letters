import React, { Component } from 'react'
import { JumpingLetters } from 'jumping-letters'

export class App extends Component {

	constructor() {
		super();
		this.state = {
			strength: 2,
			speed: 120,
			smooth: true,
			phrase: 'Jumping\\Letters'
		}
	}

	handleCheckboxChange = (e) => {
		this.setState({
			[e.target.dataset.type]: e.target.checked
		})
	}

	handleTextChange = (e) => {
		this.setState({
			[e.target.dataset.type]: e.target.value
		})
	}

	handleChange = (e) => {
		let value = parseInt(e.target.value)
		if (e.target.value === '') {
			value = 0;
		}
		this.setState({
			[e.target.dataset.type]: value
		})
	}

	render() {
		return (
			<div id="app">
				<div className="jumping-text">
	        <JumpingLetters phrase={this.state.phrase} strength={this.state.strength} speed={this.state.speed} smooth={this.state.smooth} />
	      </div>
				<div>
					<label>Phrase</label>
					<span>(use \ backslash to create a new line)</span>
					<input type="text" data-type="phrase" value={this.state.phrase} onChange={this.handleTextChange}/>
					<label style={{marginTop: '40px'}}>Strength</label>
					<span>(number of possible pixels to jump)</span>
					<input type="number" data-type="strength" value={this.state.strength} onChange={this.handleChange}/>
					<label style={{marginTop: '40px'}}>Speed</label>
					<span>(milliseconds between renders)</span>
					<input type="number" data-type="speed" value={this.state.speed} onChange={this.handleChange}/>
					<label style={{marginTop: '40px'}}>Smooth</label>
					<span>(either smooth or jumpy)</span>
					<input type="checkbox" data-type="smooth" checked={this.state.smooth} onChange={this.handleCheckboxChange}/>
				</div>
			</div>
		);
	}
}

export default App
