import React from 'react';
import './App.scss';
import CardList from './components/card-list/CardList';
import SearchBox from './searchBox/SearchBox';

class App extends React.Component {
	state = {
		monsters: [],
		searchTerm: '',
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	handleChange = (e) => {
		this.setState({ searchTerm: e.target.value });
	};

	render() {
		const { monsters, searchTerm } = this.state;

		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchTerm.toLowerCase()),
		);

		return (
			<>
				<SearchBox placeholder='Search' handleChange={this.handleChange} />
				<CardList monsters={filteredMonsters} />
			</>
		);
	}
}

export default App;
