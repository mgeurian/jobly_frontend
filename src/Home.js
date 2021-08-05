import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

function Home() {
	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h3 className="font-weight-bold">JOBLY</h3>
						<h5>Find the job for you</h5>
					</CardTitle>
				</CardBody>
			</Card>
		</section>
	);
}

export default Home;
