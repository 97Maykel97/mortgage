'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import CustomerReviewCard from './CustomerReviewCard';
import styles from './ReviewsSlider.module.scss';

const baseCustomerReviews = [
	{
		name: 'Emily Pearson',
		location: 'New York',
		role: 'Engineer',
		image: '/emily-pearson.png',
		review:
			'Terms of your offer, how quickly you can turn things around and who your lender is advising, calling listing agents, to get your deal done.',
		companyLogo: '/google-mark.png',
		companyName: 'Google',
	},
	{
		name: 'Michael Bronson',
		location: 'Los Angeles',
		role: 'Product designer',
		image: '/michael-bronson.png',
		review:
			'Terms of your offer, how quickly you can turn things around and who your lender is advising, calling listing agents, to get your deal done.',
		companyLogo: '/zillow-mark.png',
		companyName: 'Zillow',
	},
] as const;

const TOTAL_SLIDES = 10;
const DEFAULT_SLIDE_STEP = 479 + 24;
const customerReviews = Array.from({ length: TOTAL_SLIDES }, (_, index) => ({
	...baseCustomerReviews[index % baseCustomerReviews.length],
	id: index + 1,
}));

function ReviewsSlider() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [slideStep, setSlideStep] = useState(DEFAULT_SLIDE_STEP);
	const trackRef = useRef<HTMLDivElement>(null);
	const currentNumber = String(activeIndex + 1).padStart(2, '0');
	const totalNumber = String(customerReviews.length).padStart(2, '0');

	useEffect(() => {
		const track = trackRef.current;

		if (!track) {
			return;
		}

		const updateSlideStep = () => {
			const [firstSlide, secondSlide] = Array.from(track.children);

			if (
				firstSlide instanceof HTMLElement &&
				secondSlide instanceof HTMLElement
			) {
				setSlideStep(secondSlide.offsetLeft - firstSlide.offsetLeft);
			}
		};

		updateSlideStep();

		const observer = new ResizeObserver(updateSlideStep);
		observer.observe(track);

		return () => {
			observer.disconnect();
		};
	}, []);

	const showPreviousReview = () => {
		setActiveIndex(currentIndex =>
			currentIndex === 0 ? customerReviews.length - 1 : currentIndex - 1,
		);
	};

	const showNextReview = () => {
		setActiveIndex(currentIndex =>
			currentIndex === customerReviews.length - 1 ? 0 : currentIndex + 1,
		);
	};

	return (
		<div className={styles.slider}>
			<div className={styles.controlPanel}>
				<p
					className={styles.counter}
					aria-label={`Review ${activeIndex + 1} of ${customerReviews.length}`}
					aria-live='polite'
				>
					<span className={styles.currentNumber}>{currentNumber}</span>
					<span className={styles.totalNumber}>/{totalNumber}</span>
				</p>

				<div className={styles.controls}>
					<button
						className={styles.controlButton}
						type='button'
						aria-label='Previous review'
						onClick={showPreviousReview}
					>
						<Image
							className={styles.arrow}
							src='/icons/slider-arrow-left.svg'
							alt=''
							width={16}
							height={16}
							aria-hidden='true'
						/>
					</button>

					<button
						className={styles.controlButton}
						type='button'
						aria-label='Next review'
						onClick={showNextReview}
					>
						<Image
							className={styles.arrow}
							src='/icons/slider-arrow-right.svg'
							alt=''
							width={16}
							height={16}
							aria-hidden='true'
						/>
					</button>
				</div>
			</div>

			<div className={styles.viewport}>
				<div
					ref={trackRef}
					className={styles.track}
					style={{
						transform: `translate3d(-${activeIndex * slideStep}px, 0, 0)`,
					}}
				>
					{customerReviews.map(review => (
						<CustomerReviewCard key={review.id} {...review} />
					))}
				</div>
			</div>

			<div className={styles.pagination} aria-label='Select review'>
				{customerReviews.map((review, index) => (
					<button
						key={review.id}
						className={`${styles.paginationDot} ${index === activeIndex ? styles.activeDot : ''}`.trim()}
						type='button'
						aria-label={`Go to review ${index + 1}`}
						aria-current={index === activeIndex ? 'true' : undefined}
						onClick={() => setActiveIndex(index)}
					/>
				))}
			</div>
		</div>
	);
}

export default ReviewsSlider;
