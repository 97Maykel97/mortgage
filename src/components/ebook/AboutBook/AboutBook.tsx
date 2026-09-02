import Container from '../../common/Container';

import styles from './AboutBook.module.scss';

function AboutBook() {
	return (
		<section className={styles.section}>
			<Container className={styles.content}>
				<div className={styles.info}>
					<h2 className={styles.title}>About the book</h2>

					<p className={styles.description}>
						So you’re about to get into the world of homeownership. It’s
						okay...everyone feels lost during this process, but the more
						preparation you do upfront, the smoother your journey will be.
					</p>

					<form className={styles.form}>
						<input
							className={styles.input}
							type='email'
							placeholder='Your Email'
							aria-label='Your Email'
						/>
						<button className={styles.button} type='submit'>
							Get the eBook
						</button>
					</form>
				</div>
			</Container>
		</section>
	);
}

export default AboutBook;
