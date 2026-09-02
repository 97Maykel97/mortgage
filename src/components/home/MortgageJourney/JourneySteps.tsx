'use client';

import { useState } from 'react';

import styles from './JourneySteps.module.scss';

const steps = [
	{
		number: '01',
		title: 'Get positioned',
		description:
			'Structure, pre-approval, gathering, put them into the position get the offer accepted.',
	},
	{
		number: '02',
		title: 'Prep the offer',
		description:
			'Terms of your offer, how quickly you can turn things around and who your lenders is advising.',
	},
	{
		number: '03',
		title: 'Finalize Closing',
		description:
			'Put the final touches on from contract to close. Close the deal.',
	},
];

function JourneySteps() {
	const [activeStep, setActiveStep] = useState<number | null>(null);

	return (
		<div className={styles.steps} aria-label='Mortgage journey steps'>
			{steps.map((step, index) => {
				const isActive = activeStep === index;

				return (
					<div className={styles.step} key={step.number}>
						<span
							className={`${styles.marker} ${isActive ? styles.markerActive : ''}`}
							aria-hidden='true'
						/>

						<button
							className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
							type='button'
							onMouseEnter={() => setActiveStep(index)}
							onMouseLeave={() => setActiveStep(null)}
						>
							<span className={styles.number}>{step.number}</span>
							<span className={styles.title}>{step.title}</span>
							<span className={styles.divider} aria-hidden='true' />
							<span className={styles.description}>{step.description}</span>
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default JourneySteps;
