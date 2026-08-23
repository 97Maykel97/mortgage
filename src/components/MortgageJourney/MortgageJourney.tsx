import Container from '@/components/Container';
import ExpertQuote from '@/components/ExpertQuote';
import VideoCard from '@/components/VideoCard';

import JourneySteps from './JourneySteps';
import styles from './MortgageJourney.module.scss';

function MortgageJourney() {
	return (
		<section
			id='journey'
			className={styles.section}
			aria-labelledby='journey-title'
		>
			<Container>
				<h2 className={styles.title} id='journey-title'>
					Your mortgage journey is a story...
				</h2>

				<p className={styles.text}>It’s not just about clicking a button.</p>

				<div className={styles.content}>
					<JourneySteps />

					<div className={styles.videos}>
						<VideoCard
							className={styles.featuredVideo}
							size='l'
							title='The difference between «fixed rate» and «adjustable»'
							duration='0:29'
						/>

						<VideoCard
							size='s'
							title='What are points and credits?'
							duration='0:27'
						/>

						<VideoCard
							size='s'
							title='Why a mortgage is so much more than just a rate?'
							duration='0:34'
						/>
					</div>
				</div>

				<ExpertQuote
					quote="A mortgage isn't just about a rate. It's about building a strategy to help you leverage your wealth."
					author='Justin'
					image='/justin.png'
					buttonHref='#'
					triggerId='journey'
					hideTriggerId='customer-reviews'
				/>
			</Container>
		</section>
	);
}

export default MortgageJourney;
