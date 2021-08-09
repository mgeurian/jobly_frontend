import React, { useState, useEffect } from 'react';
import JoblyApi from './Api';
import SearchForm from './SearchForm';
import CompanyCard from './CompanyCard';

function CompanyList() {
	const [ companies, setCompanies ] = useState([]);

	useEffect(() => {
		search();
	}, []);

	async function search(name) {
		let companies = await JoblyApi.getCompanies(name);
		setCompanies(companies);
	}

	return (
		<div className="CompanyList container">
			<SearchForm searchFor={search} />
			{companies && (
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
			)}
		</div>
	);
}

export default CompanyList;
