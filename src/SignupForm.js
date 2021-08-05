import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SignupForm({ signup }) {
	const history = useHistory();

	const INITIAL_STATE = {
		username: '',
		firstName: '',
		lastName: '',
		email: '',
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
		let result = await signup(formData);
		console.log(formData);
		console.log(result);

		if (result.success) {
			history.push('./companies');
		} else {
			setFormErrors(result.errors);
			console.log(formErrors);
		}
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						id="username"
						className="form-control"
						value={formData.username}
						type="text"
						onChange={handleChange}
						name="username"
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
					<label htmlFor="password">Password</label>
					<input
						id="password"
						className="form-control"
						value={formData.password}
						type="password"
						onChange={handleChange}
						name="password"
					/>
				</div>
				<button className="btn btn-primary mt-4" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

export default SignupForm;
