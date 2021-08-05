import React, { useState, useContext } from 'react';
import JoblyApi from './Api';
import UserContext from './UserContext';

function ProfileForm() {
	const { currentUser, setCurrentUser } = useContext(UserContext);

	const INITIAL_STATE = {
		username: currentUser.username,
		firstName: currentUser.firstName,
		lastName: currentUser.lastName,
		email: currentUser.email,
		password: ''
	};

	const [ formData, setFormData ] = useState(INITIAL_STATE);
	const [ formErrors, setFormErrors ] = useState([]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};

	async function handleSubmit(e) {
		e.preventDefault();

		let userData = {
			firstName: formData.firstName,
			lastName: formData.lastName,
			email: formData.email,
			password: formData.password
		};

		let username = formData.username;
		let updatedUser;
		try {
			updatedUser = await JoblyApi.patchUser(username, userData);
			console.log(updatedUser);
		} catch (errors) {
			setFormErrors(errors);
		}

		setFormErrors([]);
		setCurrentUser(updatedUser);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						id="username"
						className="form-control"
						value={formData.username}
						type="text"
						name="username"
						disabled
					/>
				</div>
				<div className="form-group">
					<label htmlFor="firstName">First Name</label>
					<input
						id="firstName"
						className="form-control"
						value={formData.firstName}
						type="text"
						onChange={handleChange}
						name="firstName"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="lastName">Last Name</label>
					<input
						id="lastName"
						className="form-control"
						value={formData.lastName}
						type="text"
						onChange={handleChange}
						name="lastName"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						className="form-control"
						value={formData.email}
						type="email"
						onChange={handleChange}
						name="email"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Confirm password to make changes</label>
					<input
						id="password"
						className="form-control"
						value={formData.password}
						type="password"
						onChange={handleChange}
						name="password"
					/>
				</div>
				<button className="btn btn-primary mt-4" type="submit" onSubmit={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default ProfileForm;
