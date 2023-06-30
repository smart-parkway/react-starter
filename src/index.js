import React from 'react';
import ReactDOM from 'react-dom';
import './css/game.css';

class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null
		};
	}

	render() {
		return (
			<button className='square' onClick={() => this.setState({value: 'X'})}>{this.state.value}</button>
		);
	}
}

class Board extends React.Component {
	render() {
		const status = 'Next player is X.';
		return (
			<div>
				<div className='status'>{status}</div>
				<div>
					<Square />
					<Square />
					<Square />
				</div>
			</div>
		);
	}
}

class Game extends React.Component {
	render() {
		return (
			<div className='game'>
				<div className='game-board'>
					<Board />
				</div>
				<div className='game-info'>

				</div>
			</div>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);