import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import './NavBar.css';

function NavBar() {
	return (
		<div>
			<Navbar expand="md">
				<NavLink exact to="/">
					JOBLY
				</NavLink>
				<Nav className="ml-auto">
					<NavItem>
						<NavLink to="/companies">Companies</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/jobs">Jobs</NavLink>
					</NavItem>
					{/* <NavItem>
						<NavLink to="/profile">Profile</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/logout">Log Out</NavLink>
					</NavItem> */}
				</Nav>
			</Navbar>
		</div>
	);
}

export default NavBar;
