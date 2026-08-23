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
	hideTriggerId?: string;
	question?: string;
	buttonText?: string;
	buttonHref?: string;
};

function ExpertQuote({
	quote,
	author,
	image,
	triggerId,
	hideTriggerId,
	question = 'Have a question?',
	buttonText = "Let's talk",
	buttonHref = '#',
}: TExpertQuoteProps) {
	const [isTriggerVisible, setIsTriggerVisible] = useState(false);
	const [isHideTriggerVisible, setIsHideTriggerVisible] = useState(false);
	const isVisible = isTriggerVisible && !isHideTriggerVisible;

	useEffect(() => {
		const trigger = document.getElementById(triggerId);

		if (!trigger) {
			return;
		}

		const observer = new IntersectionObserver(
			entries => {
				const [entry] = entries;

				setIsTriggerVisible(entry.isIntersecting);
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

	useEffect(() => {
		if (!hideTriggerId) {
			return;
		}

		const hideTrigger = document.getElementById(hideTriggerId);

		if (!hideTrigger) {
			return;
		}

		const observer = new IntersectionObserver(entries => {
			const [entry] = entries;

			setIsHideTriggerVisible(entry.isIntersecting);
		});

		observer.observe(hideTrigger);

		return () => {
			observer.disconnect();
		};
	}, [hideTriggerId]);

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
