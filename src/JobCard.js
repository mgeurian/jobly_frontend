import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

import './Jobs.css';

function JobCard({ job }) {
	return (
		<div>
			<Card>
				<CardBody>
					<CardTitle className="font-weight-bold text-center">{job.title}</CardTitle>
					<CardText className="font-italic">{job.company_handle}</CardText>
					<CardText className="font-italic">{job.salary}</CardText>
					<CardText className="font-italic">{job.equity}</CardText>
					<button>Apply</button>
				</CardBody>
			</Card>
		</div>
	);
}

export default JobCard;
