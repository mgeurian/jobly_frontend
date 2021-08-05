import React from 'react';
import JobList from './JobList';

function Company({ company }) {
	// in the div below, need elements for name, logo_url, and description
	// need num_employees and handle as keys/props

	return (
		<div>
			<header>
				<h2>{company.name}</h2>
				<p>{company.description}</p>
			</header>
			<section>
				<JobList jobs={company.jobs} />
			</section>
		</div>
	);
}

export default Company;
