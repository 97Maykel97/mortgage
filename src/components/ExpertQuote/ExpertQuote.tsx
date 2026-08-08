'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './ExpertQuote.module.scss';

type TExpertQuoteProps = {
	quote: string;
	author: string;
	image: string;
	triggerId: string;
	question?: string;
	buttonText?: string;
	buttonHref?: string;
};

function ExpertQuote({
	quote,
	author,
	image,
	triggerId,
	question = 'Have a question?',
	buttonText = "Let's talk",
	buttonHref = '#',
}: TExpertQuoteProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const trigger = document.getElementById(triggerId);

		if (!trigger) {
			return;
		}

		const observer = new IntersectionObserver(
			entries => {
				const [entry] = entries;

				setIsVisible(entry.isIntersecting);
			},
			{
				threshold: 0.15,
			},
		);

		observer.observe(trigger);

		return () => {
			observer.disconnect();
		};
	}, [triggerId]);

	return (
		<aside
			className={`${styles.section} ${isVisible ? styles.visible : ''}`.trim()}
			aria-label={`Quote from ${author}`}
			aria-hidden={!isVisible}
		>
			<div className={styles.main}>
				<blockquote className={styles.quote}>
					<Image
						className={styles.quoteIcon}
						src='/icons/right-quote.svg'
						alt=''
						width={27}
						height={21}
						aria-hidden='true'
					/>

					<p className={styles.quoteText}>{quote}</p>
				</blockquote>

				<div className={styles.cta}>
					<p className={styles.question}>{question}</p>

					<Link
						className={styles.button}
						href={buttonHref}
						tabIndex={isVisible ? 0 : -1}
					>
						{buttonText}
					</Link>
				</div>
			</div>

			<div className={styles.expert}>
				<div className={styles.imageWrapper}>
					<Image
						className={styles.image}
						src={image}
						alt={author}
						fill
						sizes='64px'
					/>
				</div>

				<p className={styles.author}>{author}</p>
			</div>
		</aside>
	);
}

export default ExpertQuote;
