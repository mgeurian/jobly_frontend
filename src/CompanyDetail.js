import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './Api';
import JobCardList from './JobCardList';

function CompanyDetail() {
	const { handle } = useParams();

	const [ company, setCompany ] = useState([]);

	useEffect(
		() => {
			async function getCompany() {
				let res = await JoblyApi.getCompany(handle);
				setCompany(res);
			}
			getCompany();
		},
		[ handle ]
	);

	return (
		<div className="CompanyDetail col-md-8 offset-md-2">
			<h2>{company.name}</h2>
			<p>{company.description}</p>
			<JobCardList jobs={company.jobs} />
		</div>
	);
}

export default CompanyDetail;
