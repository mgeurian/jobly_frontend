import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

function CompanyCard({ handle, name, description, logoUrl }) {
	return (
		<Link to={`/companies/${handle}`}>
			<div>
				<Card>
					<CardBody>
						<CardTitle className="font-weight-bold text-center">{name}</CardTitle>
						<CardText className="font-italic">{description}</CardText>
						<img src={logoUrl} alt={name} />
					</CardBody>
				</Card>
			</div>
		</Link>
	);
}

export default CompanyCard;
