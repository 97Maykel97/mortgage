import Image from 'next/image';
import styles from './RatingCard.module.scss';
import Star from '../Star';

type TRatingCardProps = {
	company: 'Google' | 'Zillow';
	rating: number;
	reviews: number;
};

const logos = {
	Google: {
		src: '/google-logo.png',
		width: 100,
		height: 42,
	},
	Zillow: {
		src: '/zillow-logo.png',
		width: 122,
		height: 42,
	},
};

function RatingCard({ company, rating, reviews }: TRatingCardProps) {
	const logo = logos[company];
	const companyClass = company === 'Google' ? styles.google : styles.zillow;

	return (
		<article className={`${styles.card} ${companyClass}`}>
			<div className={styles.cardContent}>
				<p className={styles.rating}>{rating} stars rating</p>
				<Image
					className={styles.logo}
					src={logo.src}
					alt={`${company} logo`}
					width={logo.width}
					height={logo.height}
				/>

				<div className={styles.divider} />

				<p className={styles.reviews}>
					Based on <span>{reviews} reviews</span>
				</p>
			</div>

			<div className={styles.starsColumn}>
				{Array.from({ length: 5 }, (_, index) => (
					<Star key={index} fill={rating - index} />
				))}
			</div>
		</article>
	);
}

export default RatingCard;
