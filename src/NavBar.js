import React, { useContext } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import UserContext from './UserContext';

function NavBar({ logout }) {
	const { currentUser } = useContext(UserContext);

	function loggedInNavBar() {
		return (
			<div>
				<Navbar expand="md">
					<Nav className="navbar-nav ml-auto">
						<NavItem className="nav-item mr-4">
							<NavLink className="nav-link" to="/companies">
								Companies
							</NavLink>
						</NavItem>
						<NavItem className="nav-item mr-4">
							<NavLink className="nav-link" to="/jobs">
								Jobs
							</NavLink>
						</NavItem>
						<NavItem className="nav-item mr-4">
							<NavLink className="nav-link" to="/profile">
								Profile
							</NavLink>
						</NavItem>
						<NavItem className="nav-item mr-4">
							<NavLink className="nav-link" to="/" onClick={logout}>
								Log out {currentUser.username}
							</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}

	function loggedOutNavBar() {
		return (
			<div>
				<Navbar expand="md">
					<Nav className="navbar-nav ml-auto">
						<NavItem className="nav-item mr-4">
							<NavLink className="nav-link" to="/login">
								Login
							</NavLink>
						</NavItem>
						<NavItem className="nav-item mr-4">
							<NavLink className="nav-link" to="/signup">
								Sign Up
							</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}

	return (
		<nav>
			<NavLink className="float-right" exact to="/">
				JOBLY
			</NavLink>
			{currentUser ? loggedInNavBar() : loggedOutNavBar()}
		</nav>
	);
}
export default NavBar;
