import React, { useState, useEffect } from 'react';
import JoblyApi from './Api';
import SearchForm from './SearchForm';
import CompanyCard from './CompanyCard';

function CompanyList() {
	const [ companies, setCompanies ] = useState(null);

	useEffect(function getCompaniesOnMount() {
		search();
	}, []);

	async function search() {
		let companies = await JoblyApi.getCompanies();
		setCompanies(companies);
		console.log(companies);
	}
	if (companies) {
		console.log(companies);
	} else {
		console.log('no companies retrieved');
	}

	return (
		<div>
			<div>
				<SearchForm />
				{companies.length ? (
					<div>{companies.map((company) => <CompanyCard company={company} />)}</div>
				) : (
					<h5>Sorry. No results found.</h5>
				)}
			</div>
		</div>
	);
}

export default CompanyList;
