import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import JoblyApi from './Api';
import SearchForm from './SearchForm';

function JobList() {
	const [ jobs, setJobs ] = useState(null);

	useEffect(function getAllJobsOnMount() {
		search();
	}, []);

	async function search(title) {
		let jobs = await JoblyApi.getJobs(title);
		setJobs(jobs);
	}
	return <div>{jobs.map((job) => <JobCard job={job} />)}</div>;
}

export default JobList;
