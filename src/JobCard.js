import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

import './Jobs.css';

function JobCard({ job }) {
	console.log(job);
	return (
		<div>
			<Card>
				<CardBody>
					<CardTitle className="font-weight-bold">{job.title}</CardTitle>
					<CardText className="font-italic">{job.companyName}</CardText>
					<CardText className="font-italic">{job.salary}</CardText>
					<CardText className="font-italic">{job.equity}</CardText>
					<button>Apply</button>
				</CardBody>
			</Card>
		</div>
	);
}

export default JobCard;
