import Container from '../Container';

import styles from './InfoFormSection.module.scss';

type InfoFormSectionProps = {
	title: string;
	author?: string;
	description: string;
	buttonText: string;
};

function InfoFormSection({
	title,
	author,
	description,
	buttonText,
}: InfoFormSectionProps) {
	return (
		<section className={styles.section}>
			<Container className={styles.content}>
				<div className={styles.info}>
					<h2 className={styles.title}>{title}</h2>

					{author && <p className={styles.author}>{author}</p>}

					<p className={styles.description}>{description}</p>

					<form className={styles.form}>
						<input
							className={styles.input}
							type='email'
							placeholder='Your Email'
							aria-label='Your Email'
						/>
						<button className={styles.button} type='submit'>
							{buttonText}
						</button>
					</form>
				</div>
			</Container>
		</section>
	);
}

export default InfoFormSection;
