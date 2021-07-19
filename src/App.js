import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Companies from './Companies';
import Jobs from './Jobs';
import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<main>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/companies">
							<Companies title="Companies" />
						</Route>
						<Route exact path="/jobs">
							<Jobs title="Jobs" />
						</Route>
					</Switch>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
