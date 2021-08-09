import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import NavBar from './NavBar';
import UserContext from './UserContext';
import JoblyApi from './Api';
import useLocalStorage from './hooks/useLocalStorage';
import jwt from 'jsonwebtoken';

export const TOKEN_STORAGE_ID = 'jobly-token';

function App() {
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ token, setToken ] = useLocalStorage(TOKEN_STORAGE_ID);
	const [ applicationIds, setApplicationIds ] = useState(new Set([]));

	useEffect(
		function loadUser() {
			async function getCurrentUser() {
				console.log(`is there a token ${token}`);
				if (token) {
					try {
						console.log(token);
						let { username } = jwt.decode(token);
						console.log(username);
						JoblyApi.token = token;
						let currentUser = await JoblyApi.getUser(username);
						setCurrentUser(currentUser);
						console.log(currentUser);
						setApplicationIds(new Set(currentUser.applications));
					} catch (err) {
						setCurrentUser(null);
					}
				}
			}
			getCurrentUser();
		},
		[ token ]
	);

	async function login(loginData) {
		try {
			let token = await JoblyApi.postUserLogin(loginData);
			setToken(token);
			return { success: true };
		} catch (errors) {
			console.log('login failed', errors);
			return { success: false, errors };
		}
	}

	function logout() {
		setCurrentUser(null);
		setToken(null);
	}

	async function signup(signupData) {
		try {
			let token = await JoblyApi.postNewUser(signupData);
			setToken(token);
			return { success: true };
		} catch (errors) {
			return { success: false, errors };
		}
	}

	function didApply(id) {
		return applicationIds.has(id);
	}

	function apply(id) {
		if (didApply(id)) return;
		JoblyApi.postApplication(currentUser.username, id);
		setApplicationIds(new Set([ ...applicationIds, id ]));
	}

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ currentUser, setCurrentUser, apply, didApply }}>
				<div className="App">
					<NavBar logout={logout} />
					<Routes login={login} signup={signup} />
				</div>
			</UserContext.Provider>
		</BrowserRouter>
	);
}

export default App;
