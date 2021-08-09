import React, { useState, useEffect } from 'react';
import JobCardList from './JobCardList';
import JoblyApi from './Api';
import SearchForm from './SearchForm';
import LoadingSpinner from './LoadingSpinner';

function JobList() {
	const [ jobs, setJobs ] = useState([]);

	useEffect(function getJobsOnMount() {
		search();
	}, []);

	async function search(title) {
		let jobs = await JoblyApi.getJobs(title);
		setJobs(jobs);
	}

	if (!jobs) return <LoadingSpinner />;

	return (
		<div className="JobList container">
			<SearchForm searchFor={search} />
			<JobCardList jobs={jobs} />
		</div>
	);
}

export default JobList;
