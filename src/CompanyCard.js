import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

function CompanyCard({ company }) {
	return (
		<div>
			<Link to={`/companies/${company.handle}`}>
				<div>
					<section>
						<Card>
							<CardBody>
								<CardTitle className="font-weight-bold text-center">{company.name}</CardTitle>
								<CardText className="font-italic">{company.description}</CardText>
								<img src={company.logo_url} alt={company.name} />
							</CardBody>
						</Card>
					</section>
				</div>
			</Link>
		</div>
	);
}

export default CompanyCard;
