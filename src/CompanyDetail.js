import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './Api';
import JobCardList from './JobCardList';

function CompanyDetail() {
	const { handle } = useParams();

	const [ company, setCompany ] = useState([]);
	console.log(company);

	useEffect(
		function getCompanyDetailAndJobsOnMount() {
			async function getCompany() {
				let company = await JoblyApi.getCompany(handle);
				setCompany(company);
			}
			getCompany();
		},
		[ handle ]
	);

	return (
		<div className="CompanyDetail">
			<h2>{company.name}</h2>
			<p>{company.description}</p>
			<JobCardList jobs={company.jobs} />
		</div>
	);
}

export default CompanyDetail;
