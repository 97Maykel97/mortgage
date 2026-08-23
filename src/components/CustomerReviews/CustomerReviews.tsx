import Container from '@/components/Container';
import RatingCard from '@/components/RatingCard';
import ReviewsSlider from '@/components/ReviewsSlider';

import styles from './CustomerReviews.module.scss';

function CustomerReviews() {
	return (
		<section id='customer-reviews' className={styles.section}>
			<Container className={styles.container}>
				<h2 className={styles.title}>What our customers say</h2>
				<p className={styles.description}>Truly reviews from our clients</p>
				<div className={styles.content}>
					<div className={styles.ratingsColumn}>
						<RatingCard company='Google' rating={4.5} reviews={85} />
						<RatingCard company='Zillow' rating={4} reviews={22} />
					</div>

					<ReviewsSlider />
				</div>
			</Container>
		</section>
	);
}

export default CustomerReviews;
