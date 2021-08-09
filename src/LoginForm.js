import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginForm({ login }) {
	let history = useHistory();

	const INITIAL_STATE = {
		username: '',
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
		let result = await login(formData);

		if (result.success) {
			history.push('/companies');
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
						type="text"
						onChange={handleChange}
						name="username"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						className="form-control"
						type="password"
						onChange={handleChange}
						name="password"
						required
					/>
				</div>
				<button className="btn btn-primary mt-4" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
