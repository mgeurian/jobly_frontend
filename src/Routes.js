import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import PrivateRoute from './PrivateRoute';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import ProfileForm from './ProfileForm';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';

function Routes({ login, signup }) {
	return (
		<div>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route exact path="/signup">
					<SignupForm signup={signup} />
				</Route>

				<Route exact path="/login">
					<LoginForm login={login} />
				</Route>

				<PrivateRoute exact path="/companies">
					<CompanyList />
				</PrivateRoute>

				<PrivateRoute exact path="/companies/:handle">
					<CompanyDetail />
				</PrivateRoute>

				<PrivateRoute exact path="/jobs">
					<JobList />
				</PrivateRoute>

				<PrivateRoute exact path="/profile">
					<ProfileForm />
				</PrivateRoute>

				<Redirect to="/" />
			</Switch>
		</div>
	);
}

export default Routes;
