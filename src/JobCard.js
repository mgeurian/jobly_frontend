import React, { useContext, useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import UserContext from './UserContext';

function JobCard({ job }) {
	const { apply, didApply } = useContext(UserContext);
	const [ applied, setApplied ] = useState(false);

	useEffect(
		() => {
			setApplied(didApply(job.id));
		},
		[ job.id, didApply ]
	);

	async function handleClick(e) {
		e.preventDefault();
		if (didApply(job.id)) {
			return;
		} else {
			apply(job.id);
			setApplied(true);
		}
	}

	return (
		<div className="JobCard">
			{job && (
				<Card>
					<CardBody>
						<CardTitle className="font-weight-bold">{job.title}</CardTitle>
						<CardText className="font-italic">{job.companyName}</CardText>
						<CardText className="font-italic">{job.salary}</CardText>
						<CardText className="font-italic">{job.equity}</CardText>
						<button onClick={handleClick}>{applied ? 'Applied' : 'Apply'}</button>
					</CardBody>
				</Card>
			)}
		</div>
	);
}

export default JobCard;
