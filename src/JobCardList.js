import React from 'react';
import JobCard from './JobCard';

function JobCardList({ jobs }) {
	return <div className="JobCardList">{jobs && jobs.map((job) => <JobCard key={job.id} job={job} />)}</div>;
}

export default JobCardList;
