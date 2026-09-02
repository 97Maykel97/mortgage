import Image from 'next/image';

import Container from '../../common/Container';

import styles from './FeaturesSection.module.scss';

type FeatureItem = {
	title: string;
	description: string;
	icon: string;
};

type FeaturesSectionProps = {
	title: string;
	items: FeatureItem[];
};

function FeaturesSection({ title, items }: FeaturesSectionProps) {
	return (
		<section className={styles.section}>
			<Container>
				<h2 className={styles.sectionTitle}>{title}</h2>

				<div className={styles.list}>
					{items.map(item => (
						<article className={styles.card} key={item.title}>
							<div className={styles.iconWrapper}>
								<Image
									className={styles.icon}
									src={item.icon}
									alt={`${item.title} icon`}
									width={24}
									height={24}
								/>
							</div>

							<h3 className={styles.cardTitle}>{item.title}</h3>

							<div className={styles.divider} />

							<p className={styles.description}>{item.description}</p>
						</article>
					))}
				</div>
			</Container>
		</section>
	);
}

export default FeaturesSection;
