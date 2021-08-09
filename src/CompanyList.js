import React, { useState, useEffect } from 'react';
import JoblyApi from './Api';
import SearchForm from './SearchForm';
import CompanyCard from './CompanyCard';

function CompanyList() {
	const [ companies, setCompanies ] = useState([]);

	useEffect(function getCompaniesOnMount() {
		search();
	}, []);

	async function search(name) {
		let companies = await JoblyApi.getCompanies(name);
		setCompanies(companies);
		console.log(companies);
	}

	return (
		<div className="container">
			<SearchForm searchFor={search} />
			{companies.length ? (
				<div>
					{companies.map((c) => (
						<CompanyCard
							key={c.handle}
							handle={c.handle}
							name={c.name}
							description={c.description}
							logoUrl={c.logoUrl}
						/>
					))}
				</div>
			) : (
				<h5>Sorry. No results found.</h5>
			)}
		</div>
	);
}

export default CompanyList;
