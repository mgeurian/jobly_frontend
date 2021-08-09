import React, { useState, useEffect } from 'react';
import JobCardList from './JobCardList';
import JoblyApi from './Api';
import SearchForm from './SearchForm';

function JobList() {
	const [ jobs, setJobs ] = useState([]);

	useEffect(() => {
		search();
	}, []);

	async function search(title) {
		let jobs = await JoblyApi.getJobs(title);
		setJobs(jobs);
	}

	return (
		<div className="JobList container">
			<SearchForm searchFor={search} />
			<JobCardList jobs={jobs} />
		</div>
	);
}

export default JobList;
