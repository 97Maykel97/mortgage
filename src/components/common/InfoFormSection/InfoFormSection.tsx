'use client';

import { FormEvent, useRef, useState } from 'react';

import Container from '../Container';

import styles from './InfoFormSection.module.scss';

type InfoFormSectionProps = {
	title: string;
	author?: string;
	description: string;
	buttonText: string;
	className?: string;
};

const emailPattern =
	/^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]{3,}(?:\.[A-Za-z0-9-]{2,})*\.[A-Za-z]{2,}$/;

function sanitizeEmail(value: string) {
	const [localPart, ...domainParts] = value.split('@');
	const local = localPart.replace(/[^A-Za-z0-9._%+-]/g, '');

	if (domainParts.length === 0) {
		return local;
	}

	const domain = domainParts.join('').replace(/[^A-Za-z0-9.-]/g, '');
	return `${local}@${domain}`;
}

function InfoFormSection({
	title,
	author,
	description,
	buttonText,
	className,
}: InfoFormSectionProps) {
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);
	const previousEmail = useRef('');

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const email = String(formData.get('email') ?? '').trim();
		if (!email) {
			setError('Введите email.');
			setSuccess(false);
			return;
		}

		if (!emailPattern.test(email)) {
			setError('Введите email в формате name@example.com.');
			setSuccess(false);
			return;
		}

		setError('');
		setSuccess(true);
		event.currentTarget.reset();
		previousEmail.current = '';
	}

	return (
		<section className={`${styles.section} ${className ?? ''}`.trim()}>
			<Container className={styles.content}>
				<div className={styles.info}>
					<h2 className={styles.title}>{title}</h2>

					{author && <p className={styles.author}>{author}</p>}

					<p className={styles.description}>{description}</p>

					<form className={styles.form} onSubmit={handleSubmit} noValidate>
						<input
							className={styles.input}
							type='email'
							name='email'
							placeholder='Your Email'
							aria-label='Your Email'
							aria-invalid={Boolean(error)}
							aria-describedby={error ? 'email-error' : undefined}
							pattern='[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}'
							minLength={6}
							maxLength={254}
							onChange={(event) => {
								const input = event.currentTarget;

								if (/xn--/i.test(input.value)) {
									input.value = previousEmail.current;
									setError('');
									setSuccess(false);
									return;
								}

								const sanitizedValue = sanitizeEmail(input.value);

								input.value = sanitizedValue;
								previousEmail.current = sanitizedValue;
								setError('');
								setSuccess(false);
							}}
							onKeyDown={(event) => {
								if (/[\u0400-\u04FF]/.test(event.key)) {
									event.preventDefault();
								}
							}}
							onBlur={(event) => {
								const email = event.currentTarget.value.trim();

								if (email && !emailPattern.test(email)) {
									setError('Введите email в формате name@example.com.');
								}
							}}
							required
						/>
						<button className={styles.button} type='submit'>
							{buttonText}
						</button>
					</form>
					{error && (
						<p className={styles.error} id='email-error' role='alert'>
							{error}
						</p>
					)}
					{success && (
						<p className={styles.success} role='status'>
							Email успешно отправлен.
						</p>
					)}
				</div>
			</Container>
		</section>
	);
}

export default InfoFormSection;
