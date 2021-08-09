import React, { useState, useEffect } from 'react';
import JobCardList from './JobCardList';
import JoblyApi from './Api';
import SearchForm from './SearchForm';

function JobList() {
	const [ jobs, setJobs ] = useState([]);

	useEffect(function getAllJobsOnMount() {
		search();
	}, []);

	async function search(title) {
		let jobs = await JoblyApi.getJobs(title);
		setJobs(jobs);
	}

	return (
		<div className="JobList container">
			<SearchForm searchFor={search} />
			<div>{jobs.map((job) => <JobCardList job={job} key={job.id} />)}</div>
		</div>
	);
}

export default JobList;
