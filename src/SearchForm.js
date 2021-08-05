import React, { useState } from 'react';

function SearchForm({ searchFor }) {
	const [ searchTerm, setSearchTerm ] = useState('');
	function handleSubmit(e) {
		e.preventDefault();
		searchFor(searchTerm.trim() || undefined);
		setSearchTerm(searchTerm.trim());
	}

	function handleChange(e) {
		const { value } = e.target;
		setSearchTerm(value);
	}

	return (
		<div>
			<form className="form-inline" onnSubmit={handleSubmit}>
				<input
					className="form-control"
					name="searchTerm"
					placeholder="Enter search term..."
					value={searchTerm}
					onChange={handleChange}
				/>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}

export default SearchForm;
