import ResourcesList from './ResourcesList';

import styles from './Resources.module.scss';

function Resources() {
	return (
		<section className={styles.section} aria-labelledby='resources-title'>
			<h2 id='resources-title' className={styles.title}>
				Resources
			</h2>

			<ResourcesList direction='column' />
		</section>
	);
}

export default Resources;
