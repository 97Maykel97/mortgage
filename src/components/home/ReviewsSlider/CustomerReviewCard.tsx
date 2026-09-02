import Image from 'next/image';

import styles from './CustomerReviewCard.module.scss';

type TCustomerReviewCardProps = {
	name: string;
	location: string;
	role: string;
	image: string;
	review: string;
	companyLogo: string;
	companyName: 'Google' | 'Zillow';
};

function CustomerReviewCard({
	name,
	location,
	role,
	image,
	review,
	companyLogo,
	companyName,
}: TCustomerReviewCardProps) {
	const companyLogoSize = companyName === 'Google' ? 20 : 23;

	return (
		<article className={styles.card}>
			<header className={styles.header}>
				<div className={styles.imageWrapper}>
					<Image
						className={styles.image}
						src={image}
						alt={name}
						fill
						sizes='110px'
					/>
				</div>

				<div className={styles.customerInfo}>
					<p className={styles.location}>{location}</p>

					<div className={styles.nameRow}>
						<h3 className={styles.name}>{name}</h3>
						<Image
							className={styles.companyLogo}
							src={companyLogo}
							alt={`${companyName} logo`}
							width={companyLogoSize}
							height={companyLogoSize}
						/>
					</div>

					<p className={styles.role}>{role}</p>
				</div>
			</header>

			<div className={styles.divider} />

			<blockquote className={styles.review}>
				<Image
					className={styles.quoteIcon}
					src='/icons/review-quote.svg'
					alt=''
					width={27}
					height={21}
					aria-hidden='true'
				/>

				<p className={styles.reviewText}>{review}</p>
			</blockquote>
		</article>
	);
}

export default CustomerReviewCard;
